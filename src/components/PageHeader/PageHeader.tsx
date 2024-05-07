import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box/Box'
import Divider from '@mui/material/Divider/Divider'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs/Tabs'
import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography/Typography'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Button from '@mui/material/Button'
import { LoadingButton } from '@mui/lab'
import SearchBar from '../SearchBar/SearchBar'

type PageHeaderProps = {
  title?: string
  showButton?: boolean
  createClassroom?: (title: string, course: string) => Promise<void>
}

type Tab = 'posts' | 'atividades' | 'pessoas'

export default function PageHeader(PageHeaderProps: PageHeaderProps) {
  const { title, showButton, createClassroom } = PageHeaderProps

  const actualTab = new URLSearchParams(window.location.search).get('tab')
  const [tab, setTab] = useState<Tab>(actualTab ? actualTab as Tab : 'posts')
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsLoading, setModalIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const createClass = () => {
    if(name && subject && createClassroom) {
      setModalIsLoading(true)
      createClassroom(name, subject).finally(() => {
        setModalIsLoading(false)
        setModalIsOpen(false)
      })
    }
  }

  const isTurmasPage = title === 'Turmas'

  const handleChange = (e: React.SyntheticEvent, newTab: Tab) => {
    const url = new URL(window.location.href)
    navigate(`${url.pathname}?tab=${newTab}`)
    setTab(newTab)
    console.log(e) // se tirar o log o ts reclama que eu nao usei, e pra funcionar as tabs tem que ter o parametro e
  }

  return (
    <Box sx={{
      width: '95%',
      marginTop: '20px'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src='/iconsPages/turma.svg' alt='Pessoas agrupadas' />
          <Typography variant='h5' sx={{
            fontWeight: '700'
          }}>
            {title}
          </Typography>
        </Box>
        {!isTurmasPage && (
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '5px' }}>
            <TabContext value={tab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  sx={{
                    '.MuiTabs-indicator': {
                      backgroundColor: '#6730EC'
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
        )}
        
        {
          isTurmasPage && 
          <Box sx={{ width: '60%' }}>
            <SearchBar value={searchValue} setValue={setSearchValue} placeholder='Nome da Turma'/>
          </Box>
        }

        {isTurmasPage && showButton && (
          <Modal
            titulo='Nova Turma'
            textoBotaoAbrirModal='Nova Turma'
            altIcone='Nova Turma'
            variantButton='novaTurma'
            icone='/iconsPages/plus-circle.svg'
            showModal={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            onOpen={() => setModalIsOpen(true)}
          >
            <TextField
              variant='outlined'
              label='Nome*'
              onChange={(e) => setName(e.target.value)}
              />
            <TextField
             variant='outlined'
             label='Matéria*'
              onChange={(e) => setSubject(e.target.value)}
            />

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px'
            }}>
              <Button sx={{
                color: 'black',
                borderColor: '#5D1EF4',
                '&:hover': {
                  backgroundColor: '#D8D8D8'
                },
                paddingY: '12px',
                width: '48%'
              }} variant='outlined' onClick={() => setModalIsOpen(false)}>Cancelar</Button>

              <LoadingButton sx={{
                backgroundColor: '#6730EC',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#4D1EAD'
                },
                paddingY: '12px',
                width: '48%'
              }} variant='contained' onClick={createClass} loading={modalIsLoading}>Criar turma</LoadingButton>
            </Box>
          </Modal>
        )}
      </Box>
      <Divider sx={{
        width: '100%',
        border: 0,
        marginTop: '15px',
        height: '2px',
        background: 'linear-gradient(to right, #E0D5F4 0%, #A578F9 50%, #DBCFF2 100%)'
      }} />
    </Box>
  )
}
