import { Box } from '@mui/material'

interface FileInputProps {
    id: string
    description?: string
    icon?: React.ReactNode
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: File | null
}

export default function FileInput(props: FileInputProps) {
    return (
        <label htmlFor={`fileInput-${props.id}`} style={{width: '100%'}}>
            <Box
                component="span"
                sx={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: props.value ? '#7750DE' : '#545454',
                    border: '1px solid #BEBEBE',
                    borderRadius: '6px',
                    padding: '24px 16px',
                    gap: '10px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                {props.icon}
                {!props.value ? props.description : props.value.name}
            </Box>
            <input onChange={(event) => props.onChange(event)} type="file" id={`fileInput-${props.id}`} style={{ display: 'none' }} />
        </label>
    )
}