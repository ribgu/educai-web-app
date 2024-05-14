import Box from '@mui/material/Box/Box'
import Question from '../components/Question/Question'
import Layout from './Layout'
import PageHeader from '../components/PageHeader/PageHeader'

export default function Teste() {
  const alternatives = ['a', 'b', 'c', 'd']
  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title={'aa'} />
        </Box>
        <Box sx={{ width: '100%', height: '89%', display: 'flex', padding: '24px' }}>
          <Box sx={{
            width: '50%',
            height: '100%',
            gap: '16px',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px'
          }}>
            <Question alternatives={alternatives} question='Questão mockada'/>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
