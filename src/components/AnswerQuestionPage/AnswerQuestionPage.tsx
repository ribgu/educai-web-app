import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AnswerQuestion from '../AnswerQuestion/AnswerQuestion'
import Button from '@mui/material/Button'
import { ClassworkType } from '../../lib/types/Classwork'
import { useState, useEffect } from 'react'
import useClient from '../../lib/client/useClient'

type AnswerQuestionPageProps = {
  classworkId: string
}

export default function AnswerQuestionPage(props: AnswerQuestionPageProps) {
  const { classworkId } = props
  const [classwork, setClasswork] = useState<ClassworkType>()
  const client = useClient()

  useEffect(() => {
    client.getClassworkById(classworkId).then((res) => setClasswork(res))
  }
  , [classworkId])

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
          <AnswerQuestion key={index} question={question} />
        ))}
        <Button variant='contained'>Finalizar</Button>
      </Box>
    </Box>
  )
}
