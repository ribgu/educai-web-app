import Box from '@mui/material/Box/Box'
import IconButton from '@mui/material/IconButton/IconButton'
import Typography from '@mui/material/Typography/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'

type PostProps = {
    title: string
    dtPublicacao: Date
    description?: string
    fileName?: string
}

export default function Post (post: PostProps) {
    const { title, dtPublicacao, description, fileName } = post

    const handleClick = () => {
        console.log('Clicou no ícone de mais')
    }

    return (
        <Box sx={{ width: '100%', height: '18vh', border: '2px solid #BEBEBE', borderRadius: '10px' }}>
            <Box sx={{
                width: '100%',
                height: '35%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '8px',
                borderBottom: '2px solid #BEBEBE',
                borderColor: '#BEBEBE'
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '60%', alignItems: 'center', gap: '10px' }}>
                    <img src='../public/Logos/bookTwo.svg' alt='Ícone de livro' style={{ width: '26px', marginBottom: '5px' }} />
                    <Typography sx={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{title}</Typography>
                </Box>
                <IconButton size='small' onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
            </Box>
            <Box sx={{ width: '100%', height: '65%', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                <Typography>Data de publicação: <b>{dtPublicacao.toDateString()}</b>    </Typography>
                {description && <Typography sx={{ fontSize: '14px' }}>{description}</Typography>}
                {fileName && <a><Typography>{fileName}</Typography></a>}
            </Box>
        </Box>
    )
}
