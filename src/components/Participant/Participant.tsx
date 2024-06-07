import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type ParticipantProps = {
    name: string
    url: string
}

export default function Participant(props: ParticipantProps) {
    const { name, url } = props
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
            <img src={url} />
            <Typography
                sx={{ 
                    fontSize: '20px'
                }}
            >{name}</Typography>
        </Box>
    )
}