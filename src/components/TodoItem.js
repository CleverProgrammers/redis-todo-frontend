import { useEffect, useState } from 'react'
import styled from 'styled-components'

const TodoItem = ({ todo, color, name, getTodos }) => {
  const [editedTodo, setEditedTodo] = useState(todo.todo)

  const deleteTodo = async () => {
    await fetch(`http://localhost:9000/deleteTodo/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    getTodos()
  }

  const updateTodo = async () => {
    await fetch(`http://localhost:9000/updateTodo/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: editedTodo,
        status: todo.status === true,
      }),
    })

    getTodos()
  }

  const checkTodo = async () => {
    await fetch(`http://localhost:9000/updateTodo/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: todo.todo,
        status: !(todo.status === true),
      }),
    })

    getTodos()
  }

  return (
    <TodoListItem>
      <Checkbox
        className={todo.status ? 'fas fa-check-circle' : 'far fa-circle'}
        onClick={() => checkTodo()}
      />
      <input
        style={{ textDecoration: todo.status ? 'line-through' : '' }}
        value={editedTodo}
        onChange={e => setEditedTodo(e.target.value)}
      />
      {todo.todo !== editedTodo && (
        <SaveTodo onClick={() => updateTodo()} className='fas fa-check' />
      )}
      <DeleteTodo onClick={() => deleteTodo()} className='fas fa-trash-alt' />
    </TodoListItem>
  )
}

export default TodoItem

const TodoListItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: 0.3s;

  input {
    flex: 1;
    font-size: 22px;
    outline: none;
    background: none;
    border: none;
    color: #eee;
  }
`

const Checkbox = styled.i`
  font-size: 20px;
  margin-right: 10px;
  color: #fd76a1;
  cursor: pointer;
`

const SaveTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;

  &:hover {
    background-color: #2b6127;
    transition: 0.3s;
    cursor: pointer;
  }
`
const DeleteTodo = styled.i`
  color: #ff1605;
  padding: 10px 16px;
  margin-left: 14px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #7e2601;
    transition: 0.3s;
    cursor: pointer;
  }
`
