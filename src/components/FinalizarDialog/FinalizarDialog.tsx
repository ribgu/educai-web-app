import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import { useState } from 'react'

type FinalizarDialogProps = {
  title: string
  setTitle: (value: string) => void
  datePosting: string
  endDate: string
  setEndDate: (value: string) => void
  description: string
  setDescription: (value: string) => void
  onClick: () => void
}

export default function FinalizarDialog(props: FinalizarDialogProps) {
  const {
    title,
    setTitle,
    endDate,
    setEndDate,
    description,
    setDescription,
    onClick
  } = props

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
      <Button onClick={handleOpen}>Finalizar</Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Typography>
            Criar atividade
          </Typography>
          <TextField label='Título' value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField label='Descrição' value={description} onChange={(e) => setDescription(e.target.value)} />
          <Button onClick={onClick}>Finalizar</Button>
        </Box>
      </Dialog>
    </>
  )
}
