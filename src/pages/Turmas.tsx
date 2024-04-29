import Box from '@mui/material/Box/Box'
import PageHeader from '../components/PageHeader/PageHeader'
import Layout from './Layout'

export default function Turmas() {
  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display:'flex' }}>
          <PageHeader title='Turmas' />
        </Box>
      </Box>
    </Layout>
  )
}
