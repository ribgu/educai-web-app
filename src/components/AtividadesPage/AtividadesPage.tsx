import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Atividade from '../Atividade/Atividade'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BasicModal from '../Modal/Modal'

type atividadePageProps = {
    atividades: {
        id: number
        title: string
        deadline: Date
        asignmentDate: Date
        description: string
        exercises: number
        answered: number
    }[]
    onSelectAtividade: (atividade: any) => void
}

export default function AtividadesPage(props: atividadePageProps) {
    const { atividades, onSelectAtividade } = props

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
                    }} variant='outlined' onClick={() => setModalIsOpen(false)}>Montar Questionário Manual</Button>

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
                            deadline={atividade.deadline}
                            asignmentDate={atividade.asignmentDate}
                            description={atividade.description}
                            exercises={atividade.exercises}
                            answered={atividade.answered}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}