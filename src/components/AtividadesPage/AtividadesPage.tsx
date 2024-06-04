import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Atividade from '../Atividade/Atividade'
import { useState, useEffect, useCallback } from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'
import BasicModal from '../Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { Classwork, Classworks } from '../../lib/types/ClassWork'
import { Answers, AnswersList } from '../../lib/types/Answers'
import useClient from '../../lib/client/useClient'

type AtividadePageProps = {
    atividades: Classworks
    onSelectAtividade: (atividade: Classwork, answers: Answers[]) => void
    classRoomId: string
}

export default function AtividadesPage(props: AtividadePageProps) {
    const { atividades, onSelectAtividade, classRoomId } = props
    const navigate = useNavigate()
    const client = useClient()
    const [atividadesComRespostas, setAtividadesComRespostas] = useState<Map<string, Answers[]>>(new Map())

    const handleManualCreate = useCallback(() => {
        setModalIsOpen(false)
        navigate(`/turma/criar-atividade?classRoomId=${classRoomId}&tab=atividades`)
    }, [navigate, classRoomId])

    const handleSelectAtividade = useCallback((atividade: Classwork) => {
        const respostas = atividadesComRespostas.get(atividade.id) || []
        console.log(respostas)
        onSelectAtividade(atividade, respostas)
    }, [atividadesComRespostas, onSelectAtividade])

    useEffect(() => {
        const fetchAnswers = async () => {
            const newMap = new Map<string, AnswersList>()
            for (const atividade of atividades) {
                const respostas = await client.getAnswers(atividade.id)
                newMap.set(atividade.id, respostas)
            }
            setAtividadesComRespostas(newMap)
        }
        if (atividades.length > 0 && atividadesComRespostas.size === 0) {
            fetchAnswers()
        }
        
    }, [])
    

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
                    <Box key={index} onClick={() => handleSelectAtividade(atividade)}>
                        <Atividade
                            id={atividade.id}
                            title={atividade.title}
                            datePosting={atividade.datePosting}
                            endDate={atividade.endDate}
                            description={atividade.description}
                            totalQuestions={atividade.totalQuestions}
                            totalAnswers={atividade.totalAnswers}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}
