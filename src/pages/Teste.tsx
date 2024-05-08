import  TextField  from '@mui/material/TextField'
import Modal from '../components/Modal/Modal'

export default function Teste() {
  return (
    <div style={{
      width: '500px'
    }}>
      <Modal 
        showModal={true} 
        onClose={() => console.log('Fechou')} 
        onOpen={() => console.log('Abriu')} 
        variantButton='sm' 
        titulo='Nova turma' 
        icone='/IconsPages/turma.svg' 
        altIcone='Pessoas agrupadas' 
        textoBotaoAbrirModal='Nova Turma'
      >
        <TextField variant='outlined' label='Nome*'/>
        <TextField variant='outlined' label='Disciplina*'/>
      </Modal>
    </div>
  )
}
