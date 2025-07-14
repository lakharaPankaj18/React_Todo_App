import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [list, setList] = useState([])
  const [todoValue, setTodoValue] = useState('')
  function persistData(newList) {
    localStorage.setItem('list', JSON.stringify({ list: newList }))
  }
  function handleAddList(newList) {
    const newTodoList = [...list, newList]
    persistData(newTodoList)
    setList(newTodoList)
  }
  function handleDeleteTodo(index) {
    const newTodoList = list.filter((todo, todoIdx) => {
      return todoIdx !== index
    })
    persistData(newTodoList)
    setList(newTodoList)
  }
  function handleEditTodo(index) {
    const valueBeDeleted = list[index]
    setTodoValue(valueBeDeleted)
    handleDeleteTodo(index)
  }
  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('list')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).list
    setList(localTodos)
  }, [])
  return (
    <>
      <TodoInput handleAddList={handleAddList} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList list={list} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
