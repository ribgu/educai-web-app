import Box from '@mui/material/Box/Box'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'
import Turma from '../components/Turma/Turma'
import Layout from './Layout'
import { useEffect, useState } from 'react'
import useClient from '../lib/client/useClient'

export default function Home() {
  const client = useClient()
  const [turmas, setTurmas] = useState([])
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
          <PageHeader title='Turmas' />
        </Box>
        <Box sx={{ display: 'grid', padding: '24px 42px', gap: 2, 
        gridTemplateColumns: 'repeat(auto-fill, minmax(18%, 1fr))', gridTemplateRows: 'max-content',
        flex: '1', overflowY: 'auto'}}>
          {turmas && turmas.map((_, index) => (
            <Turma key={index} nome='Turma 1' disciplina='Matemática' qtdAlunos={10} onClick={() => handleClick(index)}/>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}
