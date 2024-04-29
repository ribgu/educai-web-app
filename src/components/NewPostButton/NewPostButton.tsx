import Button from '@mui/material/Button/Button'
import Typography from '@mui/material/Typography/Typography'
import Box from '@mui/material/Box/Box'

export default function NewPostButton() {
    return (
        <Button variant='outlined' sx={{ width: '100%', height: '6vh', borderRadius: '10px', border: '1px solid' }} color='primary'>
            <Box sx={{ alignItems: 'center', gap: '10px', display: 'flex' }}>
                <img src='./plus-circle.svg' />
                <Typography sx={{ color: 'black', fontWeight: '700', marginTop: '4px' }}>Novo Post</Typography>
            </Box>
        </Button>
    )
}
