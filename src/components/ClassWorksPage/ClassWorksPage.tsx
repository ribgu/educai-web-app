import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Atividade from '../ClassWork/ClassWork'
import { useContext, useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography/Typography'
import Modal from '../Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { TbSchool } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'
import { FaBook } from 'react-icons/fa'
import useClient from '../../lib/client/useClient'
import { Classwork } from '../../lib/types/ClassWork'
import { AuthContext } from '../../contexts/AuthContext'

type ClassWorsPageProps = {
    classRoomId: string
}

export default function ClassWorks(props: ClassWorsPageProps) {
    const { role, id } = useContext(AuthContext)
    const { classRoomId } = props
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const navigate = useNavigate()
    const client = useClient()
    const [classWorks, setClassWorks] = useState<Classwork[]>([])

    const handleManualCreate = () => {
        setModalIsOpen(false)
        navigate(`/turma/${classRoomId}?tab=criar-atividade`)
    }

    const onSelectAtividade = (atividade: any) => {
        navigate(`/turma/${classRoomId}?tab=responder-atividade&classRoomId=${classRoomId}&classWorkId=${atividade.id}`)
    }

    const handleIACreate = () => {
        setModalIsOpen(false)
        navigate(`/turma/${classRoomId}?tab=criar-atividade-ia`)
    }

    useEffect(() => {
        if(role ==='TEACHER') {
            client.getClassWorksByClassroom(classRoomId).then((res) => {
                if(res) {
                    setClassWorks(res)
                }
            })
        } else {
            client.getClassWorksByClassroom(classRoomId, id).then((res) => {
                if(res) {
                    setClassWorks(res)
                }
            })
        }
    }, [])

    return (
        <>
            {role === 'TEACHER' && <Modal
                variantButton='lg'
                titulo='Nova atividade'
                iconeReact={
                    <Box sx={{ backgroundColor: '#F1EBFF', borderRadius: '4px', padding: '8px' }}>
                        <TbSchool color='#341069' size={30} />
                    </Box>
                }
                altIcone='Caderno de atividade'
                textoBotaoAbrirModal='Nova Atividade'
                showModal={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onOpen={() => setModalIsOpen(true)}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                }}>
                    <Button sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        backgroundColor: '#6730EC',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#4D1EAD'
                        },
                        paddingY: '12px',
                        width: '90%',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 700
                    }}
                        startIcon={<FaBook color='#FFF' size={18} />}
                        variant='contained'
                        onClick={handleManualCreate}>Montar Questionário Manual</Button>

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                    }}>
                        <Divider sx={{ width: '40%' }} />
                        <Typography sx={{ fontSize: '12px' }}>ou</Typography>
                        <Divider sx={{ width: '40%' }} />
                    </Box>

                    <Button sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        color: 'black',
                        borderColor: '#5D1EF4',
                        '&:hover': {
                            backgroundColor: '#D8D8D8'
                        },
                        paddingY: '12px',
                        width: '90%',
                        textTransform: 'none',
                        borderRadius: '10px',
                        fontWeight: 700
                    }} variant='outlined'
                        startIcon={<BsStars color='#6730EC' size={22} />}
                        onClick={handleIACreate}>Gerar Questionário por IA</Button>
                </Box>
            </Modal>}

            <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column', overflow: 'auto' }}>
                {!classWorks || classWorks.length === 0 && (
                    <Typography variant="h6" align="center" sx={{
                        fontSize: '16px',
                    }}>Poxa! Você ainda não tem nenhuma atividade.. 😕</Typography>
                )}
                {classWorks.map((classWork, index) => (
                    <Box key={index} onClick={() => onSelectAtividade(classWork)}>
                        <Atividade
                            ClassWork={classWork}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}
