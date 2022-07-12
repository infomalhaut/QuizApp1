import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

import { useDispatch } from 'react-redux'
import { handleCategoryChange } from '../redux/ACTIONS.JS'
import { handleDifficultyChange } from '../redux/ACTIONS.JS'
import { handleTypeChange } from '../redux/ACTIONS.JS'

export const SelectField = (props) => {
    const {label,options} = props;
    const [value,setValue] = useState('')
    const dispatch = useDispatch();
    const handleChange = (e) =>{
      setValue(e.target.value)
      switch(label){
        case "Category":
          dispatch(handleCategoryChange(e.target.value))
          break;
        case "Difficulty":
          dispatch(handleDifficultyChange(e.target.value))
          break;
        case "Type":
        dispatch(handleTypeChange(e.target.value))
        break;
        default:
          return;
      }
    }
    console.log(value)
  return (
    <div className='m-3 w-[300px]'>
        <FormControl>
          <Select placeholder={label} onChange={handleChange}>
            {options.map(op1=><option value={op1.id} key={op1.id}>{op1.name}</option>)}
          </Select>
        </FormControl>
    </div>
  )
}
