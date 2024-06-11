import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'
import { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { PiWarningCircleBold } from 'react-icons/pi'
import { Radio } from '@mui/material'

interface AnswerQuestionProps {
  index: number
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
  const { description, options, id, handleSelectAlternative, index } = props
  const [questionIsFinished, setQuestionIsFinished] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (userOption: string) => {
    console.log(userOption)
    setSelectedOption(userOption)
    handleSelectAlternative(id, userOption)
    setQuestionIsFinished(true)
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', padding: '24px', border: '1px solid #BEBEBE', borderRadius: '8px', flexDirection: 'column', gap: '12px', paddingBottom: '21px' }} >
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }} >
          <Typography variant='h6'>
            Questão {index + 1}
          </Typography>

          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Typography variant='body2' color={questionIsFinished ? 'green' : 'red'}>
                {questionIsFinished ? 'Respondida' : 'Pendente'}
            </Typography>

            {questionIsFinished ? <IoCheckmarkSharp color='green'/> : <PiWarningCircleBold size={18} color='red'/>}
          </Box>
        </Box>

        <Typography color='#666' variant='body1'>{description}</Typography>

        <Box sx={{ borderBottom: '1px solid #BEBEBE', gap: '8px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
          {options.map((option, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', width: '100%', cursor: 'pointer', color: '#2c2c2c' }} onClick={() => handleOptionChange(option.key)}>
              <Typography variant='body1' sx={{minWidth: '10px'}}>{option.key}</Typography>
              <Radio checked={selectedOption === option.key} sx={{width: '40px'}} />
              <Typography variant='body1' sx={{minWidth: '10px'}}>{option.description}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingInline: '8px' }} >
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <FaRegCheckCircle size={20} color='#7750DE'/>
            <Typography variant='body2' color='#7750DE'>Selecione a alternativa correta</Typography>
          </Box>
        </Box>
    </Box>
  )
}
