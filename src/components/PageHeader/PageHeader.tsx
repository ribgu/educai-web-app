import Box from '@mui/material/Box/Box'
import Divider from '@mui/material/Divider/Divider'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography/Typography'
import { useState } from 'react'
import { Tabs, useTheme } from '@mui/material'

type PageHeaderProps = {
  title: string
}

type Tab = 'posts' | 'atividades' | 'pessoas'


export default function PageHeader(PageHeaderProps: PageHeaderProps) {
  const { title } = PageHeaderProps

  const [tab, setTab] = useState<Tab>('posts')
  const theme = useTheme()

  const handleChange = (e: React.SyntheticEvent, newTab: Tab) => {
    setTab(newTab)
    // tem que fazer a logica para mudar o conteudo da pagina ou a rota
    console.log(e) // se tirar o log o ts reclama que eu nao usei, e pra funcionar as tabs tem que ter o parametro e
  }

  return (
    <Box sx={{
      width: '80%',
      marginTop: '20px',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap:'20px' }}>
        <img src='./iconsPages/turma.svg' alt='' />
        <Typography variant='h5' sx={{
          fontWeight: '700'
        }}>
          {title}
        </Typography>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom:'5px' }}>
          <TabContext value={tab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                sx={{
                  '.MuiTabs-indicator': {
                    backgroundColor: theme.palette.primary.main
                  },
                  '.MuiTab-root': {
                    color: 'black',
                    fontWeight: '600'
                  }
                }}
                indicatorColor='primary'
                textColor='secondary'
                onChange={handleChange}
                value={tab}
              >
                <Tab label='Posts' value='posts' />
                <Tab label='Atividades' value='atividades' />
                <Tab label='Pessoas' value='pessoas' />
              </Tabs>
            </Box>
          </TabContext>
        </Box>
      </Box>
      <Divider sx={{
        border: '1px solid purple'
      }} />
    </Box>
  )
}
