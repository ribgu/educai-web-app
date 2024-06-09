import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'

type CardLeaderboardProps = {
    nome: React.ReactNode,
    foto: string,
    posicao: number,
    acertos: number
}

export default function CardLeaderboard(props: CardLeaderboardProps) {
    const { nome, foto, posicao, acertos } = props
    const picture = foto ? foto : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    return (
        <Box sx={{
            width: '95%',
            height: '12%',
            border: '1px solid #D6D6D6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '8px',
            paddingX: '16px',
        }}>
            <Typography variant='h6'>{posicao}</Typography>
            <img src={picture} style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%'
            }} alt="Foto do aluno" />
            <Typography sx={{
                width: '40%',
            }} variant='body1'>{nome}</Typography>
            <Typography sx={{
                width: '15%',
            }} variant='body1'>{acertos}</Typography>
        </Box>
    )
}
