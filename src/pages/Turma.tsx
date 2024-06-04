import PageHeader from '../components/PageHeader/PageHeader'
import Layout from './Layout'
import Box from '@mui/material/Box/Box'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TurmaType } from '../lib/types/Turma'
import useClient from '../lib/client/useClient'
import PostsPage from '../components/PostsPage/PostsPage'
import Leaderboard from '../components/Leaderboard/Leaderboard'
import AtividadesPage from '../components/AtividadesPage/AtividadesPage'
import ListagemAtividade from '../components/ListagemAtividades/ListagemAtividade'
import { Classwork, Classworks } from '../lib/types/ClassWork'
import { Participantes } from '../lib/types/Participante'
import { AnswersList } from '../lib/types/Answers'

export default function Turma() {
    const client = useClient()
    const { id } = useParams()
    const [turma, setTurma] = useState<TurmaType>()
    const [selectedAtividade, setSelectedAtividade] = useState<Classwork>()
    const [participants, setParticipants] = useState<Participantes | undefined>()
    const [atividadeAnswers, setAtividadeAnswers] = useState<AnswersList>([])
    const tab = new URLSearchParams(window.location.search).get('tab') as 'posts' | 'atividades' | 'pessoas'

    useEffect(() => {
        if (id) {
            client.getClassroomById(id).then((res) => {
                setTurma(res)
            })
        }
    }, [id])

    useEffect(() => {
      const fetchParticipants = async () => {
          if (id && !participants) {
              const res = await client.getParticipants(id)
              setParticipants(res)
          }
      }
      fetchParticipants()
  }, [id])

  useEffect(() => {
    const fetchClassworks = async () => {
        if (id && !turma?.atividades) {
            const res = await client.getClassworks(id)
            setTurma(prevTurma => prevTurma ? { ...prevTurma, atividades: res } : undefined)
        }
    }
    fetchClassworks()
}, [id])

    const handleSelectAtividade = (atividade: Classwork, answers: AnswersList) => {
        setSelectedAtividade(atividade)
        setAtividadeAnswers(answers)
    }

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
                        {tab === 'posts' && (
                            <PostsPage posts={[]} />
                        )}
                        {tab === 'atividades' && (
                            selectedAtividade ? (
                                <ListagemAtividade
                                    nomeAtividade={selectedAtividade.title}
                                    answers={atividadeAnswers}
                                    participantes={participants || []}
                                    onVoltar={() => setSelectedAtividade(undefined)}
                                />
                            ) : (
                                <AtividadesPage
                                    atividades={turma?.atividades || []}
                                    onSelectAtividade={handleSelectAtividade}
                                    classRoomId={id as string}
                                />
                            )
                        )}
                        {tab === 'pessoas' && (
                            <>
                                {/* Pessoas */}
                            </>
                        )}
                    </Box>

                    <Leaderboard />

                </Box>
            </Box>
        </Layout>
    )
}
