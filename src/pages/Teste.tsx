import  TextField  from '@mui/material/TextField'
import Modal from '../components/Modal/Modal'

export default function Teste() {
  return (
    <>
      <Modal titulo='Nova turma' icone='../assets/icons/google.svg' textoBotao='Criar'>
        <TextField id='outlined-basic' variant='outlined' label='Nome'/>
        <TextField id='outlined-basic' variant='outlined' label='Disciplina'/>
      </Modal>
    </>
  )
}
