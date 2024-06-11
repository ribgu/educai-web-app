/* eslint-disable react-hooks/exhaustive-deps */
  import Box from '@mui/material/Box'
  import AnswerQuestion from '../AnswerQuestion/AnswerQuestion'
  import Button from '@mui/material/Button'
  import { Classwork, ClassworksAnswered } from '../../lib/types/ClassWork'
  import { useState, useEffect, useContext } from 'react'
  import useClient from '../../lib/client/useClient'
  import { QuestionAnswers } from '../../lib/types/SendAnswerData'
  import { SendAnswerData } from '../../lib/types/SendAnswerData'
  import { AuthContext } from '../../contexts/AuthContext'
  import { useLocation } from 'react-router-dom'
  import PageHeader from '../PageHeader/PageHeader'
  import Layout from '../../pages/Layout'

  export default function AnswerQuestionPage() {
    const [classwork, setClasswork] = useState<Classwork>()
    const [answers, setAnswers] = useState<QuestionAnswers[]>([])
    const [classworksAnswered, setClassworksAnswered] = useState<ClassworksAnswered[]>([])
    const [completedQuestion, setCompletedQuestion] = useState<SendAnswerData>()
    const client = useClient()
    const { id } = useContext(AuthContext)

    const classworkId = new URLSearchParams(useLocation().search).get('classWorkId') ?? ''
    const classroomId = new URLSearchParams(useLocation().search).get('classRoomId') ?? ''
    console.log('classworkId:', classworkId)

    const handleSelectAlternative = (questionId: string, answerKey: string) => {
      setAnswers(prevAnswers => {
        const index = prevAnswers.findIndex(answer => answer.questionId === questionId)
        const newAnswer = { questionId, optionKey: answerKey }

        if (index === -1) {
          return [...prevAnswers, newAnswer]
        } else {
          return prevAnswers.map((answer, i) => i === index ? newAnswer : answer)
        }
      })
    }

    useEffect(() => {
      client.getClasworksByUserId(classroomId, id).then((res) => setClassworksAnswered(res))
    }, [classworkId, id])

    useEffect(() => {
      console.log('answers updated:', answers)
    }, [answers])

    useEffect(() => {
      if (completedQuestion) {
        console.log('completedQuestion:', completedQuestion)
        const headers = { classworkId, userId: id }
        client.addAnswers(completedQuestion, headers)
      }
    }, [completedQuestion])

    const handleSendAnswers = () => {
      const datePosting = new Date().toISOString()
      setCompletedQuestion({ datePosting, questionAnswers: answers })
    }

    useEffect(() => {
      client.getClassworkById(classworkId).then((res) => setClasswork(res))
    }, [classworkId])

    return (
      <Layout>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
              <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                <PageHeader title={classwork?.title} tab='atividades'/>
              </Box>
              <Box sx={{ width: '100%', height: '80%', display: 'flex', padding: '24px', overflowY: 'auto' }}>
                <Box sx={{
                  width: '100%',
                  height: '80vh',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  {classwork?.questions.map((question, index) => (
                    <AnswerQuestion key={index}
                      description={question.description}
                      options={question.options}
                      id={question.id as string}
                      handleSelectAlternative={handleSelectAlternative}
                    />
                  ))}
                </Box>
              </Box>
              <Button
                variant='contained'
                onClick={handleSendAnswers}
                sx={{
                  marginTop: '8px',
                  width: '96%',
                }}
              >Finalizar</Button>
        </Box>
      </Layout>
    )
  }
