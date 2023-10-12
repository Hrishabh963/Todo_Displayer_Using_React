import React, { useEffect, useState } from 'react'
import { Navigation } from './Navigation'
import { Todos } from './Todos';

const Content = () => {
  const [todos,setTodos] = useState(null);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setTodos(data.splice(0,20).sort((todo1,todo2)=> todo1.completed < todo2.completed )));

  },[todos]) 
  return (
    <>
    <Navigation />
    <h1 className='text-4xl font-extrabold text-center py-4'>Displaying all todos</h1>
      <div className="flex flex-wrap justify-evenly mt-4">
      {todos && todos.map((todo)=>{
        return <Todos title={todo.title} key={todo.id} id={todo.id} isCompleted={todo.completed} />
      })}
      </div>
    </>
  )
}

export default Content
