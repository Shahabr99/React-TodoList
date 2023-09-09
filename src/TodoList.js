import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from 'react';
import Todo from './Todo'


const TodoList = () => {

  const INITIAL_STATE = [{
    id: uuid(),
    topic: "",
    task: ""
  }]

  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (topic, task) => {
    setTodos(data => ([
      ...data,
      { topic, task, id:uuid() }
    ]))
  }


  return (
    <>
      <div>
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div>
        {todos.map(todo => <Todo key={todo.id} topic={todo.topic} task={todo.task} />)}
      </div>
    </>
  )
}

export default TodoList;