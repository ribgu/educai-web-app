import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

type ItemProps = {
  name: string
  icon: string
  path: string
}
export default function DrawerItem(props: ItemProps) {
  const { name, icon } = props
  return (
    <ListItem sx={{
      display: 'flex',
      gap: '10px',
      backgroundColor: 'white',
      width: '128px',
      padding: '10px'
    }}>
      <img src={icon} alt={name} />
      <Typography variant='h6' sx={{
        fontWeight: 'bold'
      }}>{name}</Typography>
    </ListItem>
  )
}
