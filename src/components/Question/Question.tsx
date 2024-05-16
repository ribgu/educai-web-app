import { Button, IconButton, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'
import Alternative from './components/Alternative'
import { Delete } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'

type Alternative = {
    text: string
    selected?: boolean
}

type QuestionProps = {
    question: string
    handleChangeQuestion: (value: string) => void
}

export default function Question(props: QuestionProps) {
    const { question, handleChangeQuestion } = props

    const [alternatives, setAlternatives] = useState<Alternative[]>([
        { text: 'A', selected: true },
        { text: 'B', selected: false },
        { text: 'C', selected: false },
        { text: 'D', selected: false }
    ])

    const handleSelectAlternative = (index: number) => {
        const newAlternatives = alternatives.map((alternative, i) => {
            if (i === index) {
                return { ...alternative, selected: true }
            }
            return { ...alternative, selected: false }
        })
        setAlternatives(newAlternatives)
    }

    const handleDeleteAlternative = (index: number) => {
        const newAlternatives = alternatives.filter((_A, i) => i !== index)
        setAlternatives(newAlternatives)
    }

    const handleAddAlternative = () => {
        const newAlternatives = [...alternatives, { text: '', selected: false }]
        setAlternatives(newAlternatives)
    }

    const handleChangeName = (index: number, value: string) => {
        const newAlternatives = alternatives.map((alternative, i) => {
            if (i === index) {
                return { ...alternative, text: value }
            }
            return alternative
        })
        setAlternatives(newAlternatives)
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', padding: '16px', border: '1px solid #BEBEBE', borderRadius: '8px', flexDirection: 'column', gap: '8px' }} >
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }} >
                <Typography variant='h6'>Questão 1</Typography>
                <Typography variant='body2' color={'green'}>Completa</Typography>
            </Box>
            <TextField size='small' value={question} onChange={(e) => handleChangeQuestion?.(e.target.value)} />
            <Box>
                {alternatives.map((alternative, index) => (
                    <Alternative
                        key={index}
                        text={alternative.text}
                        selected={alternative.selected}
                        handleSelectAlternative={() => handleSelectAlternative(index)}
                        handleDeleteAlternative={() => handleDeleteAlternative(index)}
                        handleChangeName={(value) => handleChangeName(index, value)}
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
                <IconButton>
                    <Delete />
                </IconButton>
            </Box>
        </Box>
    )
}
