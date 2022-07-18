import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { Controller, UseControllerProps } from 'react-hook-form'
import { TrainModelForm } from '../types/TrainModelForm'

interface TrainModelTextFieldProps extends UseControllerProps<TrainModelForm> {
    label: string
}

const TrainModelTextField: FC<TrainModelTextFieldProps> = (props) => (
    <Controller
    name={props.name}
    control={props.control}
    render={({field, fieldState}) => (
        <TextField
        {...field}
        defaultValue={props.defaultValue}
        label={props.label}
        variant="outlined"
        />
    )}
     />
)

export default TrainModelTextField;