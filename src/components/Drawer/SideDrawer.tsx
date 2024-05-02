import DrawerItem from './components/DrawerItem'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box/Box'
import { useNavigate } from 'react-router-dom'

export default function SideDrawer() {
  const home = '/IconSideBar/home_icon.svg'
  const turma = '/IconSideBar/turma_icon.svg'
  const material = '/IconSideBar/material.svg'
  const chat = '/IconSideBar/chat.svg'
  const logout = '/IconSideBar/logout.svg'
  const navigate = useNavigate()
  const actualPath = window.location.pathname

  const handleClick = (path: string) => {
    navigate(path)
  }

  const variantHome = actualPath === '/home' ? 'selected' : 'unselected'
  const variantTurma = actualPath === '/turma' ? 'turma-selected' : 'turma-unselected'
  const variantMaterial = actualPath === '/material' ? 'selected' : 'unselected'
  const variantChat = actualPath === '/edu' ? 'selected' : 'unselected'

  return (
    <Box
      sx={{
        borderRight: '1px solid #e0e0e0',
        width: '18%',
      }}>
      <List sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%' }}>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '80px'
          }}
        >
          <DrawerItem name='Home' icon={home} path='/home' variant={variantHome} onClick={() => handleClick('/home')} />
          <DrawerItem name='Turmas' icon={turma} path='/turma' variant={variantTurma} onClick={() => handleClick('/turma')} />
          <DrawerItem name='Criar Material' icon={material} path='/material' variant={variantMaterial} color='#6730EC' onClick={() => handleClick('/material')} />
          <DrawerItem name='Fale com o edu' icon={chat} path='/edu' variant={variantChat} color='#6730EC' onClick={() => handleClick('/edu')} />
        </Stack>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '80px'
          }}
        >
          <DrawerItem name='Sair' icon={logout} path='/logout' variant='unselected' color='red' onClick={() => handleClick('/logout')} />
        </Box>
      </List>
    </Box>
  )
}
