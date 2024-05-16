import { Box } from '@mui/material'

interface FileInputProps {
    description?: string
    icon?: React.ReactNode
}

export default function FileInput(props: FileInputProps) {
    return (
        <label htmlFor="fileInput" style={{width: '100%'}}>
            <Box
                component="span"
                sx={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#bdbdbd',
                    border: '1px solid #BEBEBE',
                    borderRadius: '6px',
                    padding: '24px 16px',
                    gap: '10px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                {props.icon}
                {props.description}
            </Box>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
        </label>
    )
}