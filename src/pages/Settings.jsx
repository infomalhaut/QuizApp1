import React from 'react'
import { SelectField } from '../components/SelectField'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { TextField } from '../components/TextField'
import useAxios from '../hooks/useAxios'
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const {response,error,loading}=useAxios({url:"/api_category.php"})
  const navigate = useNavigate();
  console.log(response)
  if(loading){
    return(
      <div className='flex justify-center items-center w-full h-screen'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      </div>
    )
  }
  if(error){
    return(
      <div className='flex justify-center items-center w-full h-screen'>
        <p className='text-4xl font-bold'> Something went wrong</p>
      </div>
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  }
  const difficultyOptions = [
    {id:"easy", name:"Easy"},
    {id:"medium", name:"Medium"},
    {id:"hard", name:"Hard"}
  ]
  const typeOptions =[
    {id:"multiple",name:"Multiple Choise"},
    {id:"boolean",name:"True/False"}
  ]
  return (
    <div className=''>
        <p className='text-4xl text-center mt-5 m-3'>Quiz App</p>
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category"/>
        <SelectField options={difficultyOptions}label="Difficulty"/>
        <SelectField options={typeOptions} label="Type"/>
        <TextField/>
        <Button colorScheme='blue' type="submit">Get Started</Button>
        </form>
    </div>
  )
}
