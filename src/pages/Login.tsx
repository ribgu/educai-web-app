import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import { useAsyncCallback } from 'react-async-hook'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo/Logo'
import SlideLogin from '../components/SlidesLogin/SlidesLogin'
import { AuthContext } from '../contexts/AuthContext'
import useClient from '../lib/client/useClient'

export default function Login() {
    const client = useClient()
    const { updateAuthData } = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = useAsyncCallback(async () => {
        await client.login({ email, password }).then((res) => {
            updateAuthData(res.token)
            navigate('/home')
        })
    })

    return (
        <Box sx={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: '100%',
                borderRadius: '0px 50px 50px 0px',
                background: 'linear-gradient(177deg, rgba(103,48,236,1) 0%, rgba(30,1,50,1) 100%)',
            }}>
                <SlideLogin />
            </Box>

            <Box sx={{
                width: '50%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
            }}>

                <Logo variant='padraoBlack' width='sm' />

                <Box sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <TextField
                        variant='outlined'
                        label='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        type='password'
                        label='Senha'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox defaultChecked />
                        <Typography variant='body2'>Mantenha-me conectado</Typography>
                    </Box>

                    <Button variant='contained'
                        onClick={handleLogin.execute}
                        sx={{
                            backgroundColor: '#6730EC',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#4D1EAD',
                            },
                            paddingY: '12px'
                        }} >
                        <Typography variant='body2' color='white'>Entrar</Typography> </Button>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        justifyContent: 'center',
                    }}>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
