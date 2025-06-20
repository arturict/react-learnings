import React from 'react';
export default function TodoList() {
  let todos = [
    'go to the gym',
    'eat more fruits',
    'do more'
  ]
  
  return (
    <ul className='main'>

      {todos.map((todo, todoIndex) => {
        return (
          <li  className="todoItem" key={todoIndex}>{todo}</li>
        )
      })}
    </ul>
  )
}
