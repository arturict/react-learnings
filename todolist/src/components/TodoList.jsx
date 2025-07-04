import React from 'react';
import TodoCard from './TodoCard';
export default function TodoList(props) {
 const {todos} = props
  
  return (
    <ul className='main'>

      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} text={todo}>
            <p>{todo}</p>
            </TodoCard> 
        )
      })}
    </ul>
  )
}
 