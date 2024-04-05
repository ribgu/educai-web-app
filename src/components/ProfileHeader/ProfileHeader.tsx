import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

type ProfileHeaderProps = {
  name: string
  imageUrl: string
}

export default function ProfileHeader(props: ProfileHeaderProps) {
  const { name, imageUrl } = props

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2
    }}>
      <Typography variant='h6' fontWeight={900} color={'white'}>{name}</Typography>
      <Avatar src={imageUrl} sx={{
        borderColor: 'white',
        border: '3px solid'
      }} />
    </Stack>
  )
}
