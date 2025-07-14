import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
  const { list } = props
  return (
    <ul className='main'>
      {list.map((val, idx) => {
        return (
          <TodoCard {...props} key={idx} index={idx}>
            <p>{val}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList