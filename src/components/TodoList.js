import { useEffect, useState } from 'react'
import styled from 'styled-components'

const TodoList = () => {
  const [input, setInput] = useState('')

  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon>
          <i className={'fas fa-user'} />
        </CategoryIcon>
        <Title>My Todo</Title>
        <TodoInput value={input} onChange={e => setInput(e.target.value)} />
        <AddTodo className='fas fa-plus' />
      </TodoCategoryHeader>
    </Wrapper>
  )
}

export default TodoList

const Wrapper = styled.div`
  background-color: #20212d;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`

const TodoCategoryHeader = styled.div`
  background-color: #272833;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
`

const CategoryIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #fd76a1;
`

const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
`

const AddTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #20212d;
    transition: 0.3s;
    cursor: pointer;
  }
`

const TodoInput = styled.input`
  height: 30px;
  font-size: 18px;
  outline: none;
  background-color: #20212d;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 4px 10px;
  margin-right: 4px;
`
