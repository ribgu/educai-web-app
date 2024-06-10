/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box/Box'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'
import Turma from '../components/Turma/Turma'
import Layout from './Layout'
import { useContext, useEffect, useState } from 'react'
import useClient from '../lib/client/useClient'
import { AuthContext } from '../contexts/AuthContext'
import { TurmaType, TurmasType } from '../lib/types/Turma'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const { role } = useContext(AuthContext)
  const client = useClient()
  const [turmas, setTurmas] = useState<TurmasType>([])
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [turmaSearch, setTurmaSearch] = useState<TurmaType | null>(null)
  const regex = /[^a-zA-Z0-9\s]/g
  const throwToast = (message : string, isError : boolean = false) => {
    if(isError){
      return toast.error(message, {
        position: 'bottom-right',
        autoClose: 2600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      return toast.success(message, {
        position: 'bottom-right',
        autoClose: 2600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        })
    }
  }

  const handleClick = (classroomId: string) => {
    navigate(`/turma/${classroomId}?tab=posts`)
  }

  useEffect(() => {
    updateClassrooms()
  }, [])

  const searchClassrooms = () => {
    const turmasOrdenadas = mergeSort(turmas)

    setTurmaSearch(binarySearch(turmasOrdenadas, search))
  }

  function binarySearch(turmas: TurmasType, title: string): TurmaType | null {
    if(regex.test(title)) {
      throwToast('Caracteres especiais são invalidos.', true)
    }

    let left = 0
    let right = turmas.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (turmas[mid].title === title) {
        return turmas[mid]
      }
      if (turmas[mid].title < title) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return null
  }

  function mergeSort(turmas: TurmasType): TurmasType {
    if (turmas.length <= 1) {
      return turmas
    }

    const middle = Math.floor(turmas.length / 2)
    const left = turmas.slice(0, middle)
    const right = turmas.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left: TurmasType, right: TurmasType): TurmasType {
    const resultArray = []
    let leftIndex = 0, rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].title < right[rightIndex].title) {
        resultArray.push(left[leftIndex])
        leftIndex++
      } else {
        resultArray.push(right[rightIndex])
        rightIndex++
      }
    }

    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex))
  }

  const createClassroom = async (title: string, course: string): Promise<void> => {
    if (regex.test(title) || regex.test(course)) {
      throwToast('Não foi possivel criar a turma, atente-se aos caracteres especiais.', true)
      return
    }

    return await client.createClassroom({ title, course }).then(() => {
      updateClassrooms()
      throwToast('Turma criada com sucesso!')
    })
  }

  const updateClassrooms = () => {
    client.getUserClassrooms().then((data) => setTurmas(data))
  }

  return (
    <Layout>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader
            search={{ searchValue: search, setSearchValue: setSearch, onSearch: searchClassrooms }}
            createClassroom={createClassroom}
            showButton={role === 'TEACHER'}
            title='Turmas'
          />
        </Box>
        <Box sx={{
          display: 'grid', padding: '24px 42px', gap: 2,
          gridTemplateColumns: 'repeat(auto-fill, minmax(20%, 1fr))', gridTemplateRows: 'max-content',
          flex: '1', overflowY: 'auto'
        }}>
          {turmas && !turmaSearch && turmas.map((turma, index) => (
            <Turma
              key={index}
              title={turma.title}
              course={turma.course}
              studentsCount={turma.studentsCount}
              onClick={() => handleClick(turma.id)}
              id={turma.id}
              isTeacher={role === 'TEACHER'}
              nextSubmission={turma.nextSubmission}
              updateClassrooms={updateClassrooms}
            />
          ))}

          {
            turmaSearch &&
            <Turma
              title={turmaSearch.title}
              course={turmaSearch.course}
              studentsCount={turmaSearch.studentsCount}
              onClick={() => handleClick(turmaSearch.id)}
              id={turmaSearch.id}
              isTeacher={role === 'TEACHER'}
              nextSubmission={turmaSearch.nextSubmission}
              updateClassrooms={updateClassrooms}
            />
          }
        </Box>
      </Box>
      <ToastContainer
        position='bottom-right'
        autoClose={2600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Layout>
  )
}
