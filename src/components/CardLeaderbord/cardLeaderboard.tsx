import Box from '@mui/material/Box/Box'
import Typography from '../Typography/Typography'

type CardLeaderboardProps = {
    nome: React.ReactNode,
    foto: string,
    posicao: number,
    acertos: number
}

export default function CardLeaderboard(props: CardLeaderboardProps) {
    const { nome, foto, posicao, acertos } = props
    return (
        <Box sx={{
            width: '95%',
            height: '12%',
            border: '1px solid #D6D6D6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '8px',
            gap: '10px',
            paddingX: '16px',
        }}>
            <Typography variant='h3'>{posicao}</Typography>
            <img src={foto} style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%'
            }} alt="Foto do aluno" />
            <Typography variant='body1'>{nome}</Typography>
            <Typography variant='body1'>{acertos}</Typography>
        </Box>
    )
}