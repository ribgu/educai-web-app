import ListItemButton from '@mui/material/ListItemButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

type ItemProps = {
  name: string
  icon: string
  path: string
  variant: 'selected' | 'unselected' | 'turma-selected' | 'turma-unselected'
  color?: string
}
export default function DrawerItem(props: ItemProps) {
  const { name, icon, variant, color } = props
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const colorHex = color ? '#6730EC' : 'black'

  return (
    <>
      {variant === 'selected' && (
        <ListItemButton sx={{
          display: 'flex',
          gap: '10px',
          backgroundColor: '#F1EBFF',
          justifyContent: 'center',
          borderRadius: '0 24px 24px 0',
          width: '100%',
        }}>
          <Stack sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexDirection: 'row'
          }}  >
            <img src={icon} alt={name} />
            <Typography variant='body1' sx={{
              fontWeight: 'bold',
              color: colorHex
            }}>{name}</Typography>
          </Stack>
        </ListItemButton>
      )}

      {variant === 'unselected' && (
        <ListItemButton sx={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          width: '220px',
          padding: '14px'
        }}>
          <Stack sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexDirection: 'row'
          }}  >
            <img src={icon} alt={name} />
            <Typography variant='body1' sx={{
              fontWeight: 'bold',
              color: colorHex
            }}>{name}</Typography>
          </Stack>
        </ListItemButton>
      )}

      {variant === 'turma-selected' && (
        <>
          <ListItemButton onClick={handleClick} sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '220px',
            gap: '10px',
            padding: '14px'
          }}
          >
            <img src={icon} alt={name} />
            <Typography variant='body1' sx={{
              fontWeight: 'bold',
              color: colorHex
            }}>{name}</Typography>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit> {/* ta estatico, precisa conectar com a API */}
            <List component="div" disablePadding>
              <ListItemButton sx={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                width: '220px',
                padding: '14px'
              }}>
                <Stack sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexDirection: 'row'
                }}  >
                  <Typography variant='body1' sx={{
                    fontWeight: 'bold',
                    color: colorHex
                  }}>Turma 01</Typography>
                </Stack>
              </ListItemButton>
            </List>
          </Collapse>
        </>
      )}
    </>
  )
}
