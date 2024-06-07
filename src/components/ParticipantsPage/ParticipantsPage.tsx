import Box from '@mui/material/Box/Box'
import Typography from '../Typography/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BasicModal from '../Modal/Modal'
import { useEffect, useState } from 'react'
import { useClient } from '../../lib/client/useClient'

type ParticipantsPageProps = {
    classroomId: string
}

export default function ParticipantsPage(props: ParticipantsPageProps) {
    const { classroomId } = props
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [participants, setParticipants] = useState([])
    const client = useClient()

    useEffect(() => {
        if (classroomId) {
            const participants = client.getParticipantsById(classroomId).
        }
    }, [classroomId])

    return (
        <>
            <BasicModal
                variantButton='lg' titulo='Novo Integrante'
                iconeReact={
                    <AssignmentIcon />
                }
                altIcone='Caderno de atividade'
                textoBotaoAbrirModal='Adicionar Integrante'
                showModal={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onOpen={() => setModalIsOpen(true)}
            >
                <h1>texto</h1>
            </BasicModal>
            <Box sx={{ width: '100%', flexDirection: 'collumn', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Box sx={{ width: '100%', padding: '10px' }}>
                    <Typography variant='h3'>Professores</Typography>
                    <div className='content-none w-[100%] h-[1px] bg-gradient-to-r from-gradientPurple' />
                </Box>
                <Box sx={{ width: '100%', padding: '10px' }}>
                    <Typography variant='h3'> Alunos</Typography>
                    <div className='content-none w-[100%] h-[1px] bg-gradient-to-r from-gradientPurple' />
                </Box>
            </Box>
        </>
    )
}