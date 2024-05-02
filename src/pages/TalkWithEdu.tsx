import Box from '@mui/material/Box/Box'
import Layout from './Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import TalkButton from '../components/TalkButton/TalkButton'

export default function TalkWithEdu() {
  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title='Falando com o Edu' />
        </Box>
        <Box sx={{ width: '100%', height: '89%', display: 'flex', padding: '24px', flexDirection: 'column'}}>
          <Box sx={{ width: '100%', height: '80%'}}>
            a
          </Box>
          <Box sx={{ width: '100%', height: '20%', backgroundColor: 'antiquewhite', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TalkButton />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
