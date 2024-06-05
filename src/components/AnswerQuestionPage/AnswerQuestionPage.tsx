import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AnswerQuestion from '../AnswerQuestion/AnswerQuestion'
import Button from '@mui/material/Button'
import { Classwork } from '../../lib/types/ClassWork'
import { useState, useEffect } from 'react'
import useClient from '../../lib/client/useClient'

type AnswerQuestionPageProps = {
  classworkId: string
}

type SendAnswerData = {
  datePosting: string
  questionAnswers: QuestionAnswers[]
}

type QuestionAnswers = {
  optionKey: string
  questionId: string
}

export default function AnswerQuestionPage(props: AnswerQuestionPageProps) {
  const { classworkId } = props
  const [classwork, setClasswork] = useState<Classwork>()
  const [answers, setAnswers] = useState<QuestionAnswers[]>([])
  const [completedQuestion, setCompletedQuestion] = useState<SendAnswerData>()
  const client = useClient()

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
    console.log('answers updated:', answers)
  }, [answers])

  useEffect(() => {
    if (completedQuestion) {
      console.log('completedQuestion:', completedQuestion)
    }
  }, [completedQuestion])

  const handleSendAnswers = () => {
    const datePosting = new Date().toISOString()
    setCompletedQuestion({ datePosting, questionAnswers: answers })
  }

  useEffect(() => {
    client.getClassworkById(classworkId).then((res) => setClasswork(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classworkId])

  return (
    <Box>
      <Typography variant='h5' sx={{ marginBottom: '20px' }}>
        {classwork?.title}
      </Typography>
      <Box sx={{
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        overflowY: 'auto',
      }}>
        {classwork?.questions.map((question, index) => (
          <AnswerQuestion key={index}
            description={question.description}
            options={question.options}
            id={question.id}
            handleSelectAlternative={handleSelectAlternative}
          />
        ))}
        <Button
          variant='contained'
          onClick={handleSendAnswers}
        >Finalizar</Button>
      </Box>
    </Box>
  )
}
