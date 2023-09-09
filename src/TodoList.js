import React, {useState} from 'react';
import NewTodoForm from 'react';
import Todo from './Todo'


const TodoList = () => {

  const INITIAL_STATE = [{
    topic: "",
    task: ""
  }]

  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (topic, task) => {
    setTodos(data => ([
      ...data,
      {topic, task}
    ]))
  }


  return (
    <>
      <div>
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div>
        {todos.map(todo => <Todo topic={topic} task={task} />)}
      </div>
    </>
  )
}

export default TodoList;