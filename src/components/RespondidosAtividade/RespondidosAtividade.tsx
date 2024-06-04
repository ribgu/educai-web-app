import { Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'

type listagemAtividadeProps = {
    nomeAtividade: string
    atividades: atividadeProps
}

type atividadeProps = {
    icon: string
    name: string
    status: string
    grade: number
}[]

export default function ListagemAtividade(props: listagemAtividadeProps) {
    const {nomeAtividade, atividade} = props;
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ width: '100%', height: '10%', gap: '10px' }}>
                <Typography><b>{nomeAtividade}</b></Typography>
                <Box sx={{ width: '100%', height: '60%', display: 'flex', flexDirection:'row', alignItems:'end', paddingLeft: '5px', paddingRight:'10px'}}>
                        <Typography sx={{ width: '55%' }}>Nome</Typography> 
                        <Typography sx={{ width: '30%' }}>Status</Typography>
                        <Typography sx={{ width: '15%'}}>Notas</Typography>
                </Box> 
            </Box>
            <Box sx={{ width: '100%', height: '90%', border: '2px solid #BEBEBE', borderRadius: '10px' }}>
            </Box>
        </Box>
    )
}
