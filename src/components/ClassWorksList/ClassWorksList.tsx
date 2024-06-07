import Box from '@mui/material/Box/Box'
import { Classwork } from '../../lib/types/ClassWork'

type ClassWorkListProps = {
    classWorks: Classwork[]
}

export default function ClassworksList(props: ClassWorkListProps) {
    const { classWorks } = props
    console.log(classWorks)
    return (
        <Box sx={{ width: '100%', height: '30vh', border: '2px solid #BEBEBE', borderRadius: '10px', backgroundColor: 'grey' }}>
            <h4></h4>
        </Box>
    )
}
