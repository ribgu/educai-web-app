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
            <Box sx={{ width: '100%', flexDirection: 'collumn', alignItems: 'center', justifyContent: 'space-evenly', border: '2px solid #BEBEBE', borderRadius: '10px', padding: '8px', height: '90%' }}>
                <Box sx={{ width: '100%', padding: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src='/iconsPages/teacher.svg' style={{ width: '50px', marginBottom: '5px' }} />
                        <Typography variant='h4' sx={{ fontWeight: '500' }} >Professores</Typography>
                    </Box>
                    <div className='content-none w-[100%] h-[1px] bg-gradient-to-r from-gradientPurple' />
                    <Box sx={{ marginTop: '10px' }}>
                        {participants.map((participant) => {
                            if (participant.role === 'TEACHER') {
                                return (
                                    <Participant name={participant.name} url={participant.profilePicture} />
                                )
                            }
                        })}
                    </Box>
                </Box>
                <Box sx={{ width: '100%', padding: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src='/iconsPages/student.svg' style={{ width: '50px', marginBottom: '5px' }} />
                        <Typography variant='h4' sx={{ fontWeight: '500' }} >Alunos</Typography>
                    </Box>
                    <div className='content-none w-[100%] h-[1px] bg-gradient-to-r from-gradientPurple' />
                    <Box sx={{ marginTop: '10px' }}>
                        {participants.map((participant) => {
                            if (participant.role === 'STUDENT') {
                                return (
                                    <Participant name={participant.name} url={participant.profilePicture} />
                                )
                            }
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
