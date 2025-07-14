import React from 'react'

const TodoCard = (props) => {
  const { children, handleDeleteTodo, index, handleEditTodo } = props
  return (
    <li className='todoItem'>
      {children}
      <button onClick={() => {
        handleEditTodo(index)
      }}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button onClick={() => {
        handleDeleteTodo(index)
      }}>
        <i className="fa-solid fa-trash"></i>
      </button>

    </li>

  )
}

export default TodoCard