import { Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'
import {  AnswersList, user } from '../../lib/types/Answers'
import { Participantes } from '../../lib/types/Participante'
import { useState } from 'react'

type ListagemAtividadeProps = {
    nomeAtividade: string
    answers: AnswersList
    participantes: Participantes
    onVoltar: () => void
}

const ListagemAtividade: React.FC<ListagemAtividadeProps> = (props) => {
    const { nomeAtividade, answers, participantes, onVoltar } = props;

    const getEnviado = (aluno: any, answers: AnswersList) => {
        return answers.some(alunoRespondido => alunoRespondido.user.id === aluno.id);
    }

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ width: '100%', gap: '10px', display:'flex', flexDirection:'column'}}>
                <Typography onClick={onVoltar}>Voltar</Typography>
                <Typography><b>{nomeAtividade}</b></Typography>
                
                <Box sx={{ width: '100%', height: '60%', display: 'flex', flexDirection:'row', alignItems:'end', paddingLeft: '5px', paddingRight:'5px'}}>
                        <Typography sx={{ width: '55%' }}>Nome</Typography> 
                        <Typography sx={{ width: '30%' }}>Status</Typography>
                        <Typography sx={{ width: '15%',}}>Notas</Typography>
                </Box> 
            </Box>
            <Box sx={{ width: '100%', height:'85%',border: '2px solid #BEBEBE', borderRadius: '10px', gap:'10px', display:'flex', flexDirection:'column' }}>
                {participantes.map((participante, index) => (
                    <Box key={index} sx={{ width: '100%', height: '10%', display:'flex', alignItems:'center'}}>
                        <Box sx={{ width: '55%', display: 'flex', gap: '5px', paddingLeft: '10px' }}>
                            <img  src='/iconsPages/plus-circle.svg' alt='Circulo com um mais dentro' />
                            <Typography >{participante.name}</Typography> 
                        </Box>
                        <Typography sx={{ width: '30%' }}>{getEnviado(participante, answers) ? 'ENVIADO' : 'PENDENTE'}</Typography>
                        <Typography sx={{ width: '15%' }}> <b>{"A avaliar"}</b></Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default ListagemAtividade;

