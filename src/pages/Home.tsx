import Box from '@mui/material/Box/Box'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'
import Turma from '../components/Turma/Turma'
import Layout from './Layout'

export default function Home() {
  const turmasArray = Array.from({ length: 60 })
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
        <Box sx={{ display: 'grid', padding: '24px 42px', gap: 2, 
        gridTemplateColumns: 'repeat(auto-fill, minmax(18%, 1fr))', gridTemplateRows: 'max-content',
        flex: '1', overflowY: 'auto'}}>
          {turmasArray.map((_, index) => (
            <Turma key={index} nome='Turma 1' disciplina='Matemática' qtdAlunos={20} onClick={() => handleClick(index)}/>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}
