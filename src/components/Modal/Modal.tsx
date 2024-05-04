import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

type ModalProps = {
  variantButton: 'sm' | 'lg' | 'novaTurma'
  titulo: string
  icone: string
  altIcone: string
  textoBotaoConfirmar: string
  textoBotaoAbrirModal: string
  children: React.ReactNode
  showModal: boolean
  onClose: () => void
  onOpen: () => void
  isLoading: boolean
}

export default function BasicModal(props: ModalProps) {
  const {
    variantButton,
    titulo,
    icone,
    children,
    altIcone,
    textoBotaoAbrirModal,
    showModal,
    onClose,
    onOpen
  } = props

  const isNovaTurmaButton = titulo === 'Nova Turma'

  const variantsButtonStyle = {
    'novaTurma': {
      width: 'fix-content'
    },
    'sm': {
      width: '48%'
    },
    'lg': {
      width: '100%'
    }
  }

  const sxButton = variantsButtonStyle[variantButton]

  return (
    <>
      <Button sx={{
        borderRadius: 25,
        textTransform: 'capitalize',
        display: 'flex',
        gap: '16px',
        justifyContent: variantButton === 'novaTurma' ? 'space-between' : 'center',
        borderColor: '#5D1EF4',
        '&:hover': {
          backgroundColor: '#D8D8D8'
        },
        ...sxButton
      }} startIcon={variantButton === 'novaTurma' && <FiPlusCircle size={25}/>} variant='outlined' onClick={onOpen}>
        {!isNovaTurmaButton && (
          <img src='/iconsPages/plus-circle.svg' alt='Circulo com um mais dentro' />
        )}
        <Typography variant='body1' color='#170050' fontWeight={700}>{textoBotaoAbrirModal}</Typography>
      </Button>
      <Modal
        open={showModal}
        onClose={onClose}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 450,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'white',
          border: '2px solid #808080',
          borderRadius: 8,
          boxShadow: 24,
          p: 5,
          gap: '10px'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <img src={icone} alt={altIcone} />
            <Typography variant='h6' component='h2'>
              {titulo}
            </Typography>
          </Box>

          <Divider sx={{
            width: '100%',
            border: 0,
            height: '2px',
            background: 'linear-gradient(to right, #E0D5F4 0%, #A578F9 50%, #DBCFF2 100%)',
            marginBottom: '10px'
          }} />

          {children}
        </Box>
      </Modal>
    </>
  )
}
