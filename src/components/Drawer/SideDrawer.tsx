import { ListItem, Stack, Typography } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import home from '../../../public/IconSideBar/home_icon.svg'
import turma from '../../../public/IconSideBar/turma_icon.svg'
import edu from '../../../public/IconSideBar/edu_icon.svg'

export default function SideDrawer() {
  const items = [
    {
      'name': 'início',
      'icon': home,
      'path': '/'
    },
    {
      'name': 'turmas',
      'icon': turma,
      'path': '/turmas'
    },
    {
      'name': 'edu',
      'icon': edu,
      'path': '/edu'
    }
  ]

  return (
    <Drawer
      variant='persistent'
      open={true}
    >
      <List>
        {items.map((item, index) => (
          <Stack
          sx={{
            display: 'flex',
            width: '200px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            gap: '10px',
            padding: '10px'

          }}
          >
            <ListItem key={index} sx={{
              display: 'flex',
              gap: '10px',
              backgroundColor: 'white',
              width: '128px',
              padding: '10px'
            }}>
              <img src={item.icon} alt={item.name} />
              <Typography variant='h6' sx={{
                fontWeight: 'bold'
              }}>{item.name}</Typography>
            </ListItem>
          </Stack>
        ))}
      </List>
    </Drawer>
  )
}
