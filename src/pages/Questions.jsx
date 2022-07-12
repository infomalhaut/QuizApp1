import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Spinner } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from '../redux/ACTIONS.JS';
import { decode } from "html-entities";

const getRandomInt = (max)=>{
  return Math.floor(Math.random()*Math.floor(max))
}

export const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_ques,
    score
  } = useSelector(state=>state)
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  let apiUrl = `/api.php?amount=${amount_of_ques}&category=${question_category}&dificulty=${question_difficulty}&type=${question_type}`;

  const {response,loading} = useAxios({url:apiUrl})
  const [questionIndex, setQuestionIndex] = useState(0)
  const [options,setOptions]=useState([])
  const[questionData,setQuestionData]=useState()
  
  useEffect(()=>{
    if(response?.results.length){
      const questionData = response.results[questionIndex]
      let answers=[...questionData.incorrect_answers]
      //splice - adding an element to the existing array
      answers.splice(
        getRandomInt(questionData.incorrect_answers.length),
        0,
        questionData.correct_answer
      )
      setOptions(answers)
    }
  },[response,questionIndex])

  console.log(questionData)

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
  const handleClickAnswer=(e)=>{
    const ques = response.results[questionIndex]
    if(e.target.textContent === ques.correct_answer){
      dispatch(handleScoreChange(score+1))
    }
    if(questionIndex+1<response.results.length){
      setQuestionIndex(questionIndex+1)
    }else{
      navigate("/score")
    }
  }
  console.log(score)
  return (
    <div>
       <div className='flex flex-col justify-center items-center h-screen'>
        <p className='m-3 font-bold text-xl text-[#252b64]'>{decode(response.results[questionIndex].question)}</p>
        {options.map((data,id)=>(
          <Button key={id} colorScheme='teal' variant='outline' value={data} className='m-2 w-[300px]' onClick={handleClickAnswer}>
          {data}
        </Button>
        ))}
        <p>Score: {score}</p>
       </div>
    </div>
  )
}
