import Stack from '@mui/material/Stack'
import ProfileHeader from './ProfileHeader'

export default {
    title: 'Components/ProfileHeader'
}

export const ProfileHeaderStories = () => {
    return (
      <Stack sx={{
        backgroundColor: '#3A3A3A'
      }}>
        <ProfileHeader name='Gustavinho' imageUrl='https://randomuser.me/api/portraits' />
      </Stack>
    )
}
