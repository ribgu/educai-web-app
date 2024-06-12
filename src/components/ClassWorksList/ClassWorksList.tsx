/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import useClient from '../../lib/client/useClient'
import { useLocation, useNavigate } from 'react-router-dom'
import { UsersType } from '../../lib/types/User'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Classwork } from '../../lib/types/ClassWork'
import Layout from '../../pages/Layout'
import PageHeader from '../PageHeader/PageHeader'
import { Skeleton } from '@mui/material'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify'

export default function ClassworkList() {
  const client = useClient()

  const classworkId =
    new URLSearchParams(useLocation().search).get('classWorkId') ?? ''
  const classroomId =
    new URLSearchParams(useLocation().search).get('classRoomId') ?? ''
  const [answered, setAnswered] = useState<UsersType>([])
  const [classwork, setClasswork] = useState<Classwork>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  useEffect(() => {
    const answers = client.getAnswersStatus(classworkId)
    client.getClassworkById(classworkId).then((res) => setClasswork(res))
    answers.then((result) => {
      setAnswered(result)
      setLoading(false)
    })
  }, [classworkId])

  return (
    <Layout>
      <Box sx={{ width: '100%', display:'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <PageHeader title={classwork?.title} tab='atividades' classroomId={classroomId} iconPath='/iconsPages/bookIcon.svg' />
        </Box>
        <Box
          sx={{
            width: '95%',
            gap: '10px',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '30px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '60%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'end',
              paddingLeft: '10px',
              paddingRight: '5px'
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
            width: '95%',
            height: '80%',
            border: '2px solid #BEBEBE',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {answered && answered.map((answer, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                height: '10%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: index % 2 === 0 ? '#FBF9F9' : 'white',
                cursor:'pointer'
              }}
              onClick={() => {
                if(answer.hasAnswered){
                  if(auth.role === 'TEACHER' && auth.setStudentTeacher){
                    auth.setStudentTeacher(answer.user.id)
                  }
                  navigate(`/turma/${classroomId}?tab=revisao&classWorkId=${classworkId}`)
                } else {
                  toast.warn('O aluno ainda não enviou a atividade')
                }
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
          )) 
        }
        {
          loading && Array.from({ length: 10}).map((_, index) => (
            <Skeleton variant='rounded' width='100%' height={60} key={index} style={{ marginTop: '10px' }} />
          ))
        }
        </Box>
      </Box>
      <ToastContainer
                position='bottom-right'
                autoClose={2600}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
      />
    </Layout>
  )
}
