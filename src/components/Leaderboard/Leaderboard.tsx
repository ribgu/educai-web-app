/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'
import CardLeaderboard from '../CardLeaderbord/cardLeaderboard'
import { useEffect, useState } from 'react'
import { LeaderboardType } from '../../lib/types/Leaderboard'
import useClient from '../../lib/client/useClient'
import { useParams } from 'react-router-dom'
import { Skeleton } from '@mui/material'

export default function Leaderboard() {
  const client = useClient()
  const { id } = useParams()
  const [leaderboard, setLeaderboard] = useState<LeaderboardType>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      client.getLeaderboard(id).then((res) => {
        if (res) {
          setLeaderboard(res)
          setLoading(false)
        }
      })
    }
  }, [id])

  return (
    <Box sx={{
      width: '30%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginLeft: '20px',
      borderRadius: '10px',
      border: '1px solid #E0E0E0',
      gap: '12px',
    }}>
      <Box sx={{
        display: 'flex',
        marginTop: '16px',
        gap: '10px',
        alignItems: 'center',
      }}>
        <img src='\iconsPages\iconLeaderboard.svg' alt='Pódio com uma estrela no topo' />
        <Typography variant='h6'>Leaderboard</Typography>
      </Box>
      <Typography variant='subtitle2'>Alunos que mais acertaram questões</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        paddingX: '10px',
      }}>
        <Typography variant='subtitle2'>#</Typography>
        <Typography variant='subtitle2'>Nome</Typography>
        <Typography variant='subtitle2'>Questões</Typography>
      </Box>
      <Box sx={{
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        gap: '10px',
      }}>

        {leaderboard && leaderboard.map((student, index) => (
          <CardLeaderboard
            key={student.id}
            nome={student.name}
            foto={student.profilePicture || '/iconsPages/iconUser.png'}
            posicao={index + 1}
            acertos={student.score}
          />
        ))}
        {loading && Array.from({ length: 5 }).map((_, index) => (
          <Skeleton variant='rounded' width='95%' height={60} key={index} />
        ))}
      </Box>
    </Box>
  )
}
