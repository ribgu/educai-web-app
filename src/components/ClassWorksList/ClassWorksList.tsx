/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import useClient from '../../lib/client/useClient'
import { useLocation, useNavigate } from 'react-router-dom'
import { UsersType } from '../../lib/types/User'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Classwork } from '../../lib/types/ClassWork'
import Layout from '../../pages/Layout'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function ClassworkList() {
  const client = useClient()
  const navigate = useNavigate()

  const classworkId =
    new URLSearchParams(useLocation().search).get('classWorkId') ?? ''
  const classroomId =
    new URLSearchParams(useLocation().search).get('classRoomId') ?? ''
  const [answered, setAnswered] = useState<UsersType>([])
  const [classwork, setClasswork] = useState<Classwork>()

  useEffect(() => {
    const answers = client.getAnswersStatus(classworkId)
    client.getClassworkById(classworkId).then((res) => setClasswork(res))
    answers.then((result) => setAnswered(result))
  }, [classworkId])

  const handleVoltar = () => {
    navigate(`/turma/${classroomId}/?tab=atividades`)
  }

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            gap: '10px',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '10px',
          }}
        >
          <ArrowBackIcon
            onClick={() => handleVoltar()}
            sx={{ paddingLeft: '10px', fontSize: '2rem' }}
          />
          <Typography sx={{ paddingLeft: '10px' }}>
            <b>{classwork?.title}</b>
          </Typography>

          <Box
            sx={{
              width: '100%',
              height: '60%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'end',
              paddingLeft: '10px',
              paddingRight: '5px',
            }}
          >
            <Box sx={{ width: '55%' }}>
              <Typography>Nome</Typography>
            </Box>
            <Box sx={{ width: '30%' }}>
              <Typography>Status</Typography>
            </Box>
            <Box sx={{ width: '15%' }}>
              <Typography>Notas</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '85%',
            border: '2px solid #BEBEBE',
            borderRadius: '10px',
            gap: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {answered.map((answer, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                height: '10%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: index % 2 === 0 ? '#FBF9F9' : 'white',
              }}
            >
              <Box
                sx={{
                  width: '55%',
                  display: 'flex',
                  gap: '5px',
                  paddingLeft: '10px',
                }}
              >
                <Typography>{answer.user.name}</Typography>
              </Box>
              <Box sx={{ width: '30%', display: 'flex', gap: '5px' }}>
                <Typography
                  sx={{
                    fontWeight: '600',
                    color: answer.hasAnswered ? '#00972A' : '#C49900',
                  }}
                >
                  {answer.hasAnswered ? 'Enviado' : 'Pendente'}
                </Typography>
                {answer.hasAnswered ? (
                  <img
                    src='/iconsPages/sent.svg'
                    alt='Ícone que indica que atividade foi enviada'
                  />
                ) : (
                  <img
                    src='/iconsPages/waiting.svg'
                    alt='Ícone que indica que atividade não foi enviada'
                  />
                )}
              </Box>
              <Box sx={{ width: '15%', display: 'flex', gap: '5px' }}>
                <Typography>
                  <b>
                    {answer.correctPercentage
                      ? answer.correctPercentage / 10
                      : 'Não avaliado'}
                  </b>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}
