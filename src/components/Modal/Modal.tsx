import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Divider from '@mui/material/Divider'

type ModalProps = {
   titulo: string,
   icone: string,
   textoBotao: string,
   children: React.ReactNode
}

const style = {
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
}

export default function BasicModal(props: ModalProps) {
  const { titulo, icone, textoBotao, children } = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant='outlined' onClick={handleOpen}>Nova Turma</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <img src={icone} alt="" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titulo}
          </Typography>
          <Divider />
          {children}

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}>

          <Button sx={{
            color: 'black',
            borderColor: '#5D1EF4',
            '&:hover': {
                backgroundColor: '#FF0000',
            },
            paddingY: '12px',
            width: '48%'
          }} variant='outlined'>Cancelar</Button>

          <Button sx={{
                        backgroundColor: '#6730EC',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#4D1EAD',
                        },
                        paddingY: '12px',
                        width: '48%'                    
                    }} variant='contained'>{textoBotao}</Button>

          </Box>
        </Box>
      </Modal>
    </>
  );
}