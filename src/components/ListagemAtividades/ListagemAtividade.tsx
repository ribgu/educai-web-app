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
    return (
        <Box sx={{ width: '100%', height: '30vh', border: '2px solid #BEBEBE', borderRadius: '10px', backgroundColor: 'grey' }}>
            <h4></h4>
        </Box>
    )
}
