import React from 'react';
import './Todo.css';

const Todo = ({ topic, task }) => {
  return (
    <div className="task">
        <h4>{topic}</h4>
        <p>{task}</p>
    </div>
  )
}

export default Todo;