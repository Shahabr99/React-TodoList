import React, {useState} from 'react';
// import {Formik, Form, Field, ErrorMessage} from 'formik';

const NewTodoForm = ({addTodo}) => {
  const INITIAL_VALUES = {
    topic: "",
    task: ""
  }


  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleChange= (e) => {
    setFormData(data => ({
      ...data,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(formData.topic, formData.task)
    setFormData(INITIAL_VALUES)
  }


  return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="topic">Topic: </label>
          <input id="topic" placeholder="Task Topic" name="topic" value={formData.topic} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="task">Task: </label>
          <input id="task" placeholder="Task" name="task" value={formData.task} onChange={handleChange} />
        </div>
        <button>Add</button>
      </form>
    </>
  )
}

export default NewTodoForm;