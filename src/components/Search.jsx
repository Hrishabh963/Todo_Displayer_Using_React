import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from './Navigation';
import { Todos } from './Todos';

const Search = () => {
  const [todo,setTodo] = useState();
  const {id} = useParams();
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(data => setTodo(data));
  },[todo])

  return (
    <>
    <Navigation />
    {todo!==undefined && <h1 className='p-4 text-3xl text-center font-extrabold hover:animate-pulse text-gray-800'>You Searched For: Todo with ID {id}</h1>}
    {todo!==undefined && <Todos title={todo.title} id={todo.id} isCompleted={todo.completed}/>}
    </>
  )
}

export default Search
