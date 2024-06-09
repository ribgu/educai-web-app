import { useEffect, useState } from 'react'
import useClient from '../../lib/client/useClient'
import { useLocation, useNavigate } from 'react-router-dom'
import { UsersType } from '../../lib/types/User'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Classwork } from '../../lib/types/ClassWork'
import Layout from '../../pages/Layout'

export default function ClassworkList() {
    const client = useClient()
    const navigate = useNavigate()

    const classworkId = new URLSearchParams(useLocation().search).get('classWorkId') ?? ''
    const classroomId = new URLSearchParams(useLocation().search).get('classRoomId') ?? ''
    const [answered, setAnswered] = useState<UsersType>([]);
    const [classwork, setClasswork] = useState<Classwork>()
    
    useEffect(() => {
        const answers = client.getAnswersStatus(classworkId);
        client.getClassworkById(classworkId).then((res) => setClasswork(res))
        answers.then((result) => setAnswered(result));
    }, [classworkId]);

    const handleVoltar = () => {
        navigate(`/turma/${classroomId}/?tab=atividades`)
    }

    return (
        <Layout>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ width: '100%', gap: '10px', display:'flex', flexDirection:'column'}}>
                    <Typography onClick={() => handleVoltar()} >Voltar</Typography>
                    <Typography><b>{classwork?.title}</b></Typography>
                    
                    <Box sx={{ width: '100%', height: '60%', display: 'flex', flexDirection:'row', alignItems:'end', paddingLeft: '5px', paddingRight:'5px'}}>
                            <Typography sx={{ width: '55%' }}>Nome</Typography> 
                            <Typography sx={{ width: '30%' }}>Status</Typography>
                            <Typography sx={{ width: '15%',}}>Notas</Typography>
                    </Box> 
                </Box>
                <Box sx={{ width: '100%', height:'85%',border: '2px solid #BEBEBE', borderRadius: '10px', gap:'10px', display:'flex', flexDirection:'column' }}>
                    {answered.map((answer, index) => (
                        <Box key={index} sx={{ width: '100%', height: '10%', display:'flex', alignItems:'center'}}>
                            <Box sx={{ width: '55%', display: 'flex', gap: '5px', paddingLeft: '10px' }}>
                                <img  src='/iconsPages/plus-circle.svg' alt='Circulo com um mais dentro' />
                                <Typography >{answer.user.name}</Typography> 
                            </Box>
                            <Typography sx={{ width: '30%' }}>{answer.hasAnswered}</Typography>
                            <Typography sx={{ width: '15%' }}><b>{"A avaliar"}</b></Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Layout>
    )
}