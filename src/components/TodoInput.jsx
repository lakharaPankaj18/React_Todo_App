import React, { useState } from 'react'

const TodoInput = (props) => {
  const { handleAddList, todoValue, setTodoValue } = props
  return (
    <header>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} type="text" placeholder='Enter your task here..' />
      <button onClick={() => {
        handleAddList(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}

export default TodoInput