import PageHeader from '../components/PageHeader/PageHeader'
import Layout from './Layout'
import Box from '@mui/material/Box/Box'
import Post from '../components/Post/Post'
import Modal from '../components/Modal/Modal'
import TextField from '@mui/material/TextField/TextField'
import { Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TurmaType } from '../lib/types/Turma'
import useClient from '../lib/client/useClient'
import Leaderboard from '../components/Leaderboard/Leaderboard'

export default function Turma() {
  const client = useClient()
  const { id } = useParams()
  const [turma, setTurma] = useState<TurmaType>()

  const postProps = {
    dtPublicacao: new Date(),
    title: 'Título do post'
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if(id) {
      client.getClassroomById(id).then((res) => setTurma(res))
    }
  }, [])

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

            <Modal 
              variantButton='lg' titulo='Novo Post' 
              icone='/IconsPages/turma.svg' 
              altIcone='Pessoas agrupadas' 
              textoBotaoAbrirModal='Novo Post' 
              showModal={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
              onOpen={() => setModalIsOpen(true)}
            >
              <TextField id='outlined-basic' variant='outlined' label='Título*'/>
              <TextField id='outlined-basic' variant='outlined' label='Descrição*'/>
              <TextField id='outlined-basic' variant='outlined' label='Upload de arquivo'/>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}>
                <Button sx={{
                  color: 'black',
                  borderColor: '#5D1EF4',
                  '&:hover': {
                    backgroundColor: '#D8D8D8'
                  },
                  paddingY: '12px',
                  width: '48%'
                }} variant='outlined' onClick={() => setModalIsOpen(false)}>Cancelar</Button>

                <LoadingButton sx={{
                  backgroundColor: '#6730EC',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#4D1EAD'
                  },
                  paddingY: '12px',
                  width: '48%'
                }} variant='contained'>Criar turma</LoadingButton>
              </Box>
            </Modal>

            <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
              <Post dtPublicacao={postProps.dtPublicacao} title={postProps.title}/>
              <Post dtPublicacao={postProps.dtPublicacao} title={postProps.title}/>
            </Box>
          </Box>

          <Leaderboard />

        </Box>
      </Box>
    </Layout>
  )
}
