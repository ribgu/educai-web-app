import PageHeader from '../components/PageHeader/PageHeader'
import Layout from './Layout'
import Box from '@mui/material/Box/Box'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TurmaType } from '../lib/types/Turma'
import useClient from '../lib/client/useClient'
import PostsPage from '../components/PostsPage/PostsPage'
import Leaderboard from '../components/Leaderboard/Leaderboard'

export default function Turma() {
  const client = useClient()
  const { id } = useParams()
  const [turma, setTurma] = useState<TurmaType>()
  const tab = (new URLSearchParams(window.location.search).get('tab') as 'posts' | 'atividades' | 'pessoas') || 'posts'

  useEffect(() => {
    if (id) {
      client.getClassroomById(id).then((res) => setTurma(res))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Layout>
      <Box sx={{ width: '100%' }} >
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <PageHeader title={turma?.title} />
        </Box>
        <Box sx={{ width: '100%', height: '89%', display: 'flex', padding: '24px' }}>
          <Box sx={{
            width: '65%',
            height: '100%',
            gap: '16px',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px'
          }}>
            {tab === 'posts' && id && (
              <PostsPage classroomId={id} />
            )}
            {tab === 'atividades' && (
              <>
              {/* Atividades */}
              </>
            )}
            {tab === 'pessoas' && (
              <>
              {/* Pessoas */}
              </>
            )}
          </Box>

          <Leaderboard/>

        </Box>
      </Box>
    </Layout>
  )
}
