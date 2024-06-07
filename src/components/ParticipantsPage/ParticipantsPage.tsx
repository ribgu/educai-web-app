import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BasicModal from '../Modal/Modal'
import { useEffect, useState } from 'react'
import useClient from '../../lib/client/useClient'
import Participant from '../Participant/Participant'
import { Participant as ParticipantType } from '../../lib/types/Participant'

type ParticipantsPageProps = {
    classroomId: string
}

export default function ParticipantsPage(props: ParticipantsPageProps) {
    const { classroomId } = props
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [participants, setParticipants] = useState<ParticipantType[]>([])

    const client = useClient()

    useEffect(() => {
        client.getParticipantsById(classroomId).then((res: any) => {
            setParticipants(res)
            console.log(res)
        })
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
            <Box sx={{ width: '100%', flexDirection: 'collumn', alignItems: 'center', justifyContent: 'space-evenly', border: '2px solid black' }}>
                <Box sx={{ width: '100%', padding: '10px' }}>
                    <Typography variant='h4' sx={{ fontWeight: '500'}} >Professores</Typography>
                    <div className='content-none w-[100%] h-[1px] bg-gradient-to-r from-gradientPurple' />
                    <Box>
                        {participants.map((participant) => {
                            if (participant.role === 'TEACHER') {
                                return (
                                    <Participant name={participant.name} url={participant.photoUrl} />
                                )
                            }
                        })}
                    </Box>
                </Box>
                <Box sx={{ width: '100%', padding: '10px' }}>
                    <Typography variant='h4' sx={{ fontWeight: '500'}}> Alunos</Typography>
                    <div className='content-none w-[100%] h-[1px] bg-gradient-to-r from-gradientPurple' />
                    <Box>
                        {participants.map((participant) => {
                            if (participant.role === 'STUDENT') {
                                return (
                                    <Box>
                                        <Typography>{participant.name}</Typography>
                                    </Box>
                                )
                            }
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}