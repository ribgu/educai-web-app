import { LoadingButton } from '@mui/lab'
import { Box, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { TbSchool } from 'react-icons/tb'
import Modal from '../Modal/Modal'

type FinalizarDialogProps = {
  enabled: boolean
  title: string
  setTitle: (value: string) => void
  datePosting: string
  endDate: string
  setEndDate: (value: string) => void
  description: string
  setDescription: (value: string) => void
  onClick: () => void,
  createInProgress: boolean
}

export default function FinalizarDialog(props: FinalizarDialogProps) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    onClick,
    enabled,
    createInProgress
  } = props

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useEffect(() => {
    if(!createInProgress) {
      setOpen(false)
    }
  }, [createInProgress])

  return (
    <>
      <LoadingButton 
        sx={{ paddingInline: '80px', borderRadius: '10px', textTransform: 'none', fontWeight: 600, backgroundColor: '#7750DE'}} 
        variant='contained' 
        onClick={handleOpen}
        disabled={!enabled}>
          Finalizar
      </LoadingButton>

      <Modal
        titulo='Nova Atividade'
        textoBotaoAbrirModal='Nova Atividade'
        altIcone='Nova Atividade'
        variantButton='none'
        iconeReact={
          <div style={{ backgroundColor: '#F1EBFF', borderRadius: '4px', padding: '8px' }}>
            <TbSchool color='#341069' size={30} />
          </div>      
        }
        showModal={open}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <TextField
          value={title}
          variant='outlined'
          placeholder='Nome'
          onChange={(e) => setTitle(e.target.value)}
          />
        <TextField
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          multiline
          rows={3}
          placeholder='Descrição'
          sx={{ fontSize: '16px', width: '100%' }}/>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px'
        }}>
          <Button sx={{
            borderColor: '#5D1EF4',
            '&:hover': {
                backgroundColor: '#D8D8D8'
            },
            paddingY: '12px',
            width: '48%',
            textTransform: 'none',
            borderRadius: '10px',
            fontWeight: 700,
            color: '#170050'
          }} variant='outlined' onClick={handleClose}>Cancelar</Button>

          <LoadingButton sx={{
            backgroundColor: '#6730EC',
            color: 'white',
            '&:hover': {
                backgroundColor: '#4D1EAD'
            },
            paddingY: '12px',
            width: '48%',
            textTransform: 'none',
            borderRadius: '10px',
            fontWeight: 700
          }} variant='contained' onClick={onClick} loading={createInProgress}>Postar</LoadingButton>
        </Box>
      </Modal>
    </>
  )
}
