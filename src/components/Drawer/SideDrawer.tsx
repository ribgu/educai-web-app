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
            width: '200px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '10px'

          }}
          >
            <DrawerItem name='Home' icon={home} path='/' />
            <DrawerItem name='Turma' icon={turma} path='/turma' />
            <DrawerItem name='Edu' icon={edu} path='/educ' />
          </Stack>
      </List>
    </Drawer>
  )
}
