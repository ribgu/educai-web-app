import NewPostButton from '../components/NewPostButton/NewPostButton'
import PageHeader from '../components/PageHeader/PageHeader'
import Layout from './Layout'
import Box from '@mui/material/Box/Box'
import Post from '../components/Post/Post'

export default function Turma() {
  const postProps = {
    dtPublicacao: new Date(),
    title: 'Título do post'
  }
  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title='Turma 01' />
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
            <NewPostButton />
            <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
              <Post dtPublicacao={postProps.dtPublicacao} title={postProps.title}/>
              <Post dtPublicacao={postProps.dtPublicacao} title={postProps.title}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
