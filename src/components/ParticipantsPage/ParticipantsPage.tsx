/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BasicModal from '../Modal/Modal'
import { useEffect, useState } from 'react'
import useClient from '../../lib/client/useClient'
import Participant from '../Participant/Participant'
import { Participant as ParticipantType } from '../../lib/types/Participant'
import { Button, MenuItem, TextField } from '@mui/material'

type ParticipantsPageProps = {
    classroomId: string
}

export default function ParticipantsPage(props: ParticipantsPageProps) {
    const { classroomId } = props
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [participants, setParticipants] = useState<ParticipantType[]>([])
    const [newParticipantName, setNewParticipantName] = useState('')
    const [newParticipantEmail, setNewParticipantEmail] = useState('')
    const [newParticipantRole, setNewParticipantRole] = useState('STUDENT')

    const client = useClient()

    useEffect(() => {
        client.getParticipantsById(classroomId).then((res: any) => {
            setParticipants(res)
            console.log(res)
        })
    }, [classroomId])

    // const handleCleanFields = () => {
    //     setNewParticipantName('')
    //     setNewParticipantEmail('')
    //     setNewParticipantRole('STUDENT')
    // }

    // const handleAddParticipant = () => {
    //     // client.addParticipant
    //     handleCleanFields()
    // }

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
                <TextField
                    label='Nome'
                    variant='outlined'
                    fullWidth
                    value={newParticipantName}
                    onChange={(e) => setNewParticipantName(e.target.value)}
                />
                <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    value={newParticipantEmail}
                    onChange={(e) => setNewParticipantEmail(e.target.value)}
                    />
                <TextField
                    select
                    label='Tipo'
                    variant='outlined'
                    value={newParticipantRole}
                    onChange={(e) => setNewParticipantRole(e.target.value)}
                    fullWidth
                >
                    <MenuItem value='STUDENT'>Aluno</MenuItem>
                    <MenuItem value='TEACHER'>Professor</MenuItem>
                </TextField>
                <Button variant='contained' sx={{ width: '100%', marginTop: '10px' }}>
                    Adicionar
                </Button>
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
