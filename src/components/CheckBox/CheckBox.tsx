import { FormControlLabel, Checkbox, Typography } from '@mui/material'

interface CheckBoxProps {
    label: string
    checked: boolean
    setChecked: (value: boolean) => void;
}

export default function CheckBox(props: CheckBoxProps) {
    return (
        <FormControlLabel sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            border: '1px solid #6730EC', 
            width: '180px', 
            borderRadius: '5px', 
            padding: '4px 0px'
        }} control={
            <Checkbox 
                checked={props.checked}
                onChange={() => props.setChecked && props.setChecked(!props.checked)}
                sx={{ padding: '0px' }}/>} 
            label={<Typography sx={{ color: '#545454' }}>{props.label}</Typography>} 
        />
    )
}