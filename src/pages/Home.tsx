import Box from '@mui/material/Box/Box'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'
import Turma from '../components/Turma/Turma'
import Layout from './Layout'
import { useContext, useEffect, useState } from 'react'
import useClient from '../lib/client/useClient'
import { AuthContext } from '../contexts/AuthContext'
import { TurmasType } from '../lib/types/Turma'

export default function Home() {
  const { role, getToken } = useContext(AuthContext)
  const client = useClient(getToken())
  const [turmas, setTurmas] = useState<TurmasType>([])
  const navigate = useNavigate()

  const handleClick = (index: number) => {
    // const id = turmasArray[index].id quando tiver conectado
    navigate(`/turma/${index}`)
  }

  useEffect(() => {
    client.getUserClassrooms().then((data) => setTurmas(data))
  }, [])

  return (
    <Layout>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader showButton={role === 'TEACHER'} title='Turmas' />
        </Box>
        <Box sx={{ display: 'grid', padding: '24px 42px', gap: 2, 
        gridTemplateColumns: 'repeat(auto-fill, minmax(20%, 1fr))', gridTemplateRows: 'max-content',
        flex: '1', overflowY: 'auto'}}>
          {turmas && turmas.map((turma, index) => (
            <Turma 
              key={index} 
              title={turma.title} 
              course={turma.course} 
              studentsCount={turma.studentsCount} 
              onClick={() => handleClick(index)}
              id={turma.id}
              isTeacher={role === 'TEACHER'}
              nextSubmission={turma.nextSubmission}
            />
          ))}
        </Box>
      </Box>
    </Layout>
  )
}
