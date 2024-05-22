import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Atividade from '../Atividade/Atividade'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BasicModal from '../Modal/Modal'
import { useNavigate } from 'react-router-dom'

type AtividadePageProps = {
    atividades: {
        id: string
        title: string
        datePosting: Date
        endDate: Date
        description: string
        totalQuestions: number
    }[]
    onSelectAtividade: (atividade: any) => void
    classRoomId: string
}

export default function AtividadesPage(props: AtividadePageProps) {
    const { atividades, onSelectAtividade, classRoomId } = props
    const navigate = useNavigate()

    const handleManualCreate = () => {
        setModalIsOpen(false)
        navigate(`/turma/criar-atividade?classRoomId=${classRoomId}?tab=atividades`)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <BasicModal
                variantButton='lg' titulo='Nova atividade'
                iconeReact={
                    <AssignmentIcon />
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
                        color: 'black',
                        borderColor: '#5D1EF4',
                        '&:hover': {
                            backgroundColor: '#D8D8D8'
                        },
                        paddingY: '12px',
                        width: '90%',
                        textTransform: 'none'
                    }} variant='outlined'
                    onClick={handleManualCreate}>Montar Questionário Manual</Button>

                    <Box sx={{
                        width: '90%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                    <Divider sx={{
                        width: '40%',
                    }} />
                    <Typography sx={{fontSize: '12px'}}>ou</Typography>
                    <Divider sx={{
                        width: '40%',
                    }} />
                    </Box>

                    <Button sx={{
                        backgroundColor: '#6730EC',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#4D1EAD'
                        },
                        paddingY: '12px',
                        width: '90%',
                        textTransform: 'none',
                    }} variant='contained'>Gerar Questionário por IA</Button>
                </Box>
            </BasicModal>

            <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                {atividades.map((atividade, index) => (
                    <Box key={index} onClick={() => onSelectAtividade(atividade)}>
                        <Atividade
                            title={atividade.title}
                            datePosting={atividade.datePosting}
                            endDate={atividade.endDate}
                            description={atividade.description}
                            totalQuestions={atividade.totalQuestions}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}
