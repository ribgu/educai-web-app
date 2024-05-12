import { IconButton, TextField } from '@mui/material'
import Box from '@mui/material/Box/Box'
import Radio from '@mui/material/Radio/Radio'
import CloseIcon from '@mui/icons-material/Close'

type AlternativeProps = {
    alternative: string
}

export default function Alternative(props: AlternativeProps) {
    const { alternative } = props
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', width: '100%'}}>
                <Radio />
                <TextField size='small' sx={{ width: '100%' }} value={alternative}/>
            </Box>
            <IconButton >
                <CloseIcon />
            </IconButton>
        </Box>
    )
}