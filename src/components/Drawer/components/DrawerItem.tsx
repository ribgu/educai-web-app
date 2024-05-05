import ListItemButton from '@mui/material/ListItemButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import useClient from '../../../lib/client/useClient'
import { TurmasType } from '../../../lib/types/Turma'
import { Link } from 'react-router-dom'
import { Box, Skeleton } from '@mui/material'

type ItemProps = {
  name: string
  icon: string
  path: string
  variant: 'selected' | 'unselected' | 'turma-selected' | 'turma-unselected'
  color?: string
  onClick: () => void
}
export default function DrawerItem(props: ItemProps) {
  const client = useClient()
  const { name, icon, variant, color, onClick } = props
  const [open, setOpen] = useState(false)
  const [turmas, setTurmas] = useState<TurmasType | null>()

  const handleClick = () => {
    !open && updateClassrooms()
    setOpen(!open)
  }

  const updateClassrooms = () => {
    setTurmas(null)
    client.getUserClassrooms().then((data) => setTurmas(data))
  }

  const colorHex = color ? color : '#272727'

  return (
    <>
      {variant === 'selected' && (
        <ListItemButton sx={{
          display: 'flex',
          gap: '10px',
          backgroundColor: '#F1EBFF',
          '&:hover': {
            backgroundColor: '#D1C5ED',
          },
          padding: '14px',
          justifyContent: 'center',
          borderRadius: '0 24px 24px 0',
          width: '100%',
        }}
        onClick={onClick}
        >
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
        }}
        onClick={onClick}
        >
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
            backgroundColor: '#BBA7EB',
            '&:hover': {
              backgroundColor: '#D1C5ED',
            },
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
      {variant === 'turma-unselected' && (
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
              {turmas ? turmas.map((turma, index) => (
                <Link key={index} to={`/turma/${turma.id}`}>
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
                    }}>
                      <Typography variant='body1' sx={{
                        fontWeight: 'bold',
                        color: colorHex
                      }}>{turma.title}</Typography>
                    </Stack>
                  </ListItemButton>
                </Link>
              )) : 
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Skeleton variant="rectangular" width={220} height={50} />
                  <Skeleton variant="rectangular" width={220} height={50} />
                </Box>
              }
            </List>
          </Collapse>
        </>
      )}
    </>
  )
}
