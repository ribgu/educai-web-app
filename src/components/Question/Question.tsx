import { Button, IconButton, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'
import Option from './components/Option'
import { Delete } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'
import { Question as QuestionType } from '../../lib/types/Question'

type QuestionProps = {
    question: QuestionType
    handleChangeQuestion: (value: string) => void
    deleteQuestion?: () => void
    index: number
}

export default function Question(props: QuestionProps) {
    const { question, handleChangeQuestion, deleteQuestion, index } = props

    const [options, setOptions] = useState(question.options)
    const [correctAnswerKey, setCorrectAnswerKey] = useState(question.correctAnswerKey)

    const handleSetCorretAnswerKey = (correctAnswerKey: string) => {
        setCorrectAnswerKey(correctAnswerKey)
    }

    const handleDeleteAlternative = (key: string) => {
        const newOptions = options.filter(option => option.key !== key)
        setOptions(newOptions)
    }

    const handleAddAlternative = () => {
        const nextAlphabetKey = String.fromCharCode('a'.charCodeAt(0) + options.length)
        const newOption = { key: nextAlphabetKey, description: '' }
        setOptions([...options, newOption])
    }

    const handleChangeName = (key: string, value: string) => {
        const newOptions = options.map(option => {
            if (option.key === key) {
                return { ...option, description: value }
            }
            return option
        }
        )
        setOptions(newOptions)
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', padding: '16px', border: '1px solid #BEBEBE', borderRadius: '8px', flexDirection: 'column', gap: '8px' }} >
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }} >
                <Typography variant='h6'>
                    Questão {index + 1}
                </Typography>
                <Typography variant='body2' color={'green'}>Completa</Typography>
            </Box>
            <TextField size='small' value={question.description} onChange={(e) => handleChangeQuestion?.(e.target.value)} />
            <Box>
                {options.map((option, index) => (
                    <Option
                        optionKey={option.key}
                        key={index}
                        description={option.description}
                        correctAnswerKey={correctAnswerKey}
                        handleSelectAlternative={() => handleSetCorretAnswerKey(option.key)}
                        handleDeleteAlternative={() => handleDeleteAlternative(option.key)}
                        handleChangeName={(value) => handleChangeName(option.key, value)}
                        />
                ))}
                <Box sx={{ width: '100%', paddingLeft: '16px' }}>
                    <Button onClick={handleAddAlternative}>
                        Adicionar alternativa
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #BEBEBE' }} >
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', gap: '8px' }}>
                    <CheckIcon />
                    <Typography variant='body2'>Selecione uma das opções acima para ser a correta</Typography>
                </Box>
                <IconButton onClick={deleteQuestion}>
                    <Delete />
                </IconButton>
            </Box>
        </Box>
    )
}
