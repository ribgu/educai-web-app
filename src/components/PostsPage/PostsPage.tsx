import TextField from '@mui/material/TextField/TextField'
import Modal from '../Modal/Modal'
import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Post from '../Post/Post'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'

type postsPageProps = {
    posts: {
        dtPublicacao: Date
        title: string
    }[]
}

export default function PostsPage(props: postsPageProps) {
    const { posts } = props

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <Modal
                variantButton='lg' titulo='Novo Post'
                icone='\iconsPages\turma.svg'
                altIcone='Pessoas agrupadas'
                textoBotaoAbrirModal='Novo Post'
                showModal={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onOpen={() => setModalIsOpen(true)}
            >
                <TextField id='outlined-basic' variant='outlined' label='Título*' />
                <TextField id='outlined-basic' variant='outlined' label='Descrição*' />
                <TextField id='outlined-basic' variant='outlined' label='Upload de arquivo' />
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
                {posts.map((post, index) => (
                    <Post key={index} dtPublicacao={post.dtPublicacao} title={post.title} />
                ))}
            </Box>
        </>
    )
}