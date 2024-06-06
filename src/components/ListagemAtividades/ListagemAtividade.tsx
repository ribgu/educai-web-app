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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ListagemAtividade(_props: listagemAtividadeProps) {
    return (
        <Box sx={{ width: '100%', height: '30vh', border: '2px solid #BEBEBE', borderRadius: '10px', backgroundColor: 'grey' }}>
            <h4></h4>
        </Box>
    )
}
