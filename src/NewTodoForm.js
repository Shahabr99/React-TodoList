import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

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
    e.preventDeafult()
    addTodo(formData.topic, formData.task)
    setFormData({})
  }


  return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="topic"></label>
          <input id="topic" placeholder="Task Topic" name="topic" value={formData.topic} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="task"></label>
          <input id="task" placeholder="Task" name="task" value={formData.task} onChange={handleChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default NewTodoForm;