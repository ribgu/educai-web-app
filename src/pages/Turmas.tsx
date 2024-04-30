import Box from '@mui/material/Box/Box'
import PageHeader from '../components/PageHeader/PageHeader'
import Layout from './Layout'
import Turma from '../components/Turma/Turma'

export default function Turmas() {
  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title='Turmas' />
        </Box>
        <Box sx={{ width: '100%', height: '89%', display: 'flex', padding: '24px', backgroundColor: 'red',
          flexBasis: '100%', flexShrink: 0, flexGrow: 1, flexWrap: 'wrap', gap: '5px'
         }}>
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
          <Turma nome='Turma 1' disciplina='Matemática' qtdAlunos={20} />
        </Box>
      </Box>
    </Layout>
  )
}
