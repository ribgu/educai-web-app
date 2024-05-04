import Stack from '@mui/material/Stack'
import Logo from '../Logo/Logo'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export default function TopBar() {
  const { username } = useContext(AuthContext)

  return (
    <Stack width='100%' height='80px' sx={{
      borderBottom: '1px solid transparent',
      zIndex: 10000,
      position: 'absolute',
      backgroundImage: 'linear-gradient(90deg, #1E0132, #6730EC)',
      borderRadius: '0 0 24px 24px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px'
    }}>
      <Logo variant='allWhite' width='ssm' />
      <ProfileHeader name={username} imageUrl='https://avatars.githubusercontent.com/u/6713782?v=4' />
    </Stack>
  )
}
