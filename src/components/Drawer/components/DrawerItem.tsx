import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type ItemProps = {
  name: string
  icon: string
  path: string
  variant: 'selected' | 'unselected' | 'turma-selected' | 'turma-unselected'
  color?: string
}
export default function DrawerItem(props: ItemProps) {
  const { name, icon, variant, color } = props
  const colorHex = color ? '#6730EC' : 'black'

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
            <Typography variant='body1' sx={{
              fontWeight: 'bold',
              color: colorHex
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
            <Typography variant='body1' sx={{
              fontWeight: 'bold',
              color: colorHex
            }}>{name}</Typography>
          </Stack>
        </ListItem>
      )}

      {variant === 'turma-selected' && (
        <Accordion sx={{
          display: 'flex',
          backgroundColor: '#F1EBFF',
          justifyContent: 'center',
          borderRadius: '0 24px 24px 0',
          width: '220px'
        }}>
          <Stack sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexDirection: 'row'
          }}  >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <img src={icon} alt={name} />
              <Typography variant='body1' sx={{
                fontWeight: 'bold',
                color: colorHex
              }}>{name}</Typography>
            </AccordionSummary>

          </Stack>
        </Accordion>
      )}
    </>
  )
}
