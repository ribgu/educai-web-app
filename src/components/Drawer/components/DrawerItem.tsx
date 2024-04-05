import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type ItemProps = {
  name: string
  icon: string
  path: string
  variant: 'selected' | 'unselected'
}
export default function DrawerItem(props: ItemProps) {
  const { name, icon, variant } = props
  return (
    <>
      {variant === 'selected' && (
        <ListItem sx={{
          display: 'flex',
          gap: '10px',
          backgroundColor: '#F1EBFF',
          justifyContent: 'center',
          borderRadius: '0 24px 24px 0',
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
            <Typography variant='h6' sx={{
              fontWeight: 'bold'
            }}>{name}</Typography>
          </Stack>
        </ListItem>
      )}

      {variant === 'unselected' && (
        <ListItem sx={{
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
            <Typography variant='h6' sx={{
              fontWeight: 'bold'
            }}>{name}</Typography>
          </Stack>
        </ListItem>
      )}
    </>
  )
}
