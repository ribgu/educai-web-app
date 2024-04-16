import DrawerItem from './components/DrawerItem'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import home from '../../../public/IconSideBar/home_icon.svg'
import turma from '../../../public/IconSideBar/turma_icon.svg'
import edu from '../../../public/IconSideBar/edu_icon.svg'
import Stack from '@mui/material/Stack'

export default function SideDrawer() {

  return (
    <Drawer
      variant='persistent'
      open={true}
    >
      <List>
          <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '80px'
          }}
          >
            <DrawerItem name='Home' icon={home} path='/' variant='unselected'/>
            <DrawerItem name='Turma' icon={turma} path='/turma' variant='selected'/>
            <DrawerItem name='Criar Material' icon={edu} path='/educacao' variant='unselected' color='purple'/>
            <DrawerItem name='Fale com o edu' icon={edu} path='/avaliacao' variant='unselected' color='purple'/>
          </Stack>
      </List>
    </Drawer>
  )
}
