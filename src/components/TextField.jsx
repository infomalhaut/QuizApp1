import React, { useState } from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/ACTIONS.JS'

export const TextField = () => {
  const [value,setValue]=useState(15)
    const dispatch = useDispatch();
    const handleChange = (value) =>{
      setValue(value);
      // console.log(value);
      dispatch(handleAmountChange(value))
    }
    console.log(value);
  return (
    <div>
        <NumberInput defaultValue={15} min={10} max={20} className="w-[150px] m-2 mb-5" value={value} onChange={handleChange}>
            <NumberInputField value={value} onChange={handleChange}/>
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper/>
            </NumberInputStepper>
        </NumberInput>
    </div>
  )
}
