import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import { RadioGroup } from '@mui/material'
import { Question } from '../../lib/types/Question'

interface AnswerQuestionProps {
  question: Question
}

export default function AnswerQuestion({ question }: AnswerQuestionProps) {
  return (
    <Box sx={{
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid #BEBEBE',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '16px'
    }}>
      <Typography variant='h6' sx={{ marginBottom: '10px' }}>
        {question.description}
      </Typography>
      <RadioGroup>
        {question.options.map(option => (
          <FormControlLabel
            key={option.key}
            value={option.key}
            control={<Radio />}
            label={option.description}
          />
        ))}
      </RadioGroup>
    </Box>
  )
}
