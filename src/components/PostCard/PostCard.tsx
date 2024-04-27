import Box from '@mui/material/Box/Box'
import Logo from '../Logo/Logo'
import { Typography } from '@mui/material'

export default function PostCard() {
    return (
        <Box
            sx={{
                width: '30vw',
                height: '25vh',
                borderRadius: '15px',
                border: '1px solid #BEBEBE'
            }}>
            <Box
                sx={{
                    borderRadius: '15px 15px 0 0',
                    borderBottom: '1px solid #BEBEBE',
                    justifyContent: 'space-between',
                    backgroundColor: '#F5F5F5',
                    flexDirection: 'row',
                    padding: '5px',
                    paddingTop: '1px',
                    paddingLeft: '20px',
                    height: '15%'
                }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Logo variant='bookTwo' width='bookSmall' />
                    <Typography 
                        variant='h6'
                        sx={{ fontWeight: '600' }}>
                            Título Post
                    </Typography>
                </Box>
                aasiknj
            </Box>
        </Box>
    )
}