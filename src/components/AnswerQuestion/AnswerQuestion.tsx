import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import { RadioGroup } from '@mui/material'
import { useState } from 'react'

interface AnswerQuestionProps {
  description: string
  options: {
    key: string
    description: string
  }[]
  id: string
  handleSelectAlternative: (questionId: string, answerKey: string) => void
}

export default function AnswerQuestion(
  props: AnswerQuestionProps
) {
  const { description, options, id, handleSelectAlternative } = props
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('selectedOption', event.target.value)
    setSelectedOption(event.target.value)
    handleSelectAlternative(id, event.target.value)
  }

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
        {description}
      </Typography>
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        {options.map(option => (
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
