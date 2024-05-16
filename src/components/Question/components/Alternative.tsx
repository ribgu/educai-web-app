import { IconButton, TextField } from '@mui/material'
import Box from '@mui/material/Box/Box'
import Radio from '@mui/material/Radio/Radio'
import CloseIcon from '@mui/icons-material/Close'

type AlternativeProps = {
    text: string
    selected?: boolean
    handleSelectAlternative?: () => void
    handleDeleteAlternative?: () => void
    handleChangeName?: (value: string) => void
}

export default function Alternative(props: AlternativeProps) {
    const { text, selected, handleSelectAlternative, handleDeleteAlternative, handleChangeName } = props
    return (
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }} >
            <Radio checked={selected} onClick={handleSelectAlternative} />
            <TextField size='small' value={text} onChange={(e) => handleChangeName?.(e.target.value)} />
            <IconButton onClick={handleDeleteAlternative}>
                <CloseIcon />
            </IconButton>
        </Box>
    )
}
