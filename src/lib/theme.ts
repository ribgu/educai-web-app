import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#00000',
    },
  }
})

export default theme
