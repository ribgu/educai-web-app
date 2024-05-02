import Box from '@mui/material/Box/Box'
import PageHeader from '../components/PageHeader/PageHeader'
import Layout from './Layout'
import Turma from '../components/Turma/Turma'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const turmasArray = Array.from({ length: 10 })
  const navigate = useNavigate()

  const handleClick = (index: number) => {
    // const id = turmasArray[index].id quando tiver conectado
    navigate(`/turma/${index}`)
  }

  return (
    <Layout>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title='Turmas' />
        </Box>
        <Box sx={{ display: 'grid', padding: '24px', gap: 2, 
        gridTemplateColumns: 'repeat(auto-fill, minmax(18%, 1fr))', gridTemplateRows: 'max-content',
        flex: '1', overflowY: 'scroll'}}>
          {turmasArray.map((_, index) => (
            <Turma key={index} nome='Turma 1' disciplina='Matemática' qtdAlunos={20} onClick={() => handleClick(index)}/>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}
