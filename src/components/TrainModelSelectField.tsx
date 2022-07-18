import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { Controller, UseControllerProps } from 'react-hook-form'
import { TrainModelForm } from '../types/TrainModelForm'

interface TrainModelSelectFieldProps extends UseControllerProps<TrainModelForm> {
    label: string
    values: {value: string, label: string}[]
}

const TrainModelSelectField: FC<TrainModelSelectFieldProps> = (props) => (
    <Controller
    name={props.name}
    control={props.control}
    render={({field, fieldState}) => (
        <TextField
        {...field}
        label={props.label}
        select
        > 
            {props.values.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}

        </TextField>

    )}
     />
)

export default TrainModelSelectField;