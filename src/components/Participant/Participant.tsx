import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type ParticipantProps = {
    name: string
    url: string
}

export default function Participant(props: ParticipantProps) {
    const { name, url } = props
    const picture = url === null ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' : url
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px', gap: '5px' }}>
                <img src={picture} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
                <Typography sx={{ fontSize: '18px', color: '#262626' }}>{name}</Typography>
            </Box>
        </Box>
    )
}
