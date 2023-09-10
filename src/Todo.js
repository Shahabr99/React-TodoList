import React, {useState} from 'react';
import './Todo.css';


const Todo = ({ topic, task }) => {

  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed(false)
  }

  return (
    <>
      {isClosed && <div className="task">
        <span className= "close-btn" onClick={handleClick}>X</span>
        <h4>{topic}</h4>
        <p>{task}</p>
      </div>}
    </>
    
  )
}

export default Todo;