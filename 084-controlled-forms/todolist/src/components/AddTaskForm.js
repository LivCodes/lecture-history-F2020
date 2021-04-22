import {useState} from 'react'

function AddTaskForm(props){ 

  const [formData, setFormData] = useState({title: "", due: ""})

  //update the state of formData
  function changeFormData(e){
    const {name, value} = e.target
    setFormData( prevState => ({...prevState, [name]: value}) )
    // setFormData( prevState => ({...prevState, [e.target.name]: e.target.value}) )
  }

  function handleSubmit(e){
    e.preventDefault();
    props.setTasks(prevTasks => [...prevTasks, formData])
  }

  //on submit of the form, we take our formData and add it to our tasks
  return (
    <div>
      <p>Add Task Form</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Title"
          value={formData.title}
          onChange={changeFormData}
        />
        <input 
          type="text" 
          name="due" 
          placeholder="Due Date" 
          value={formData.due}
          onChange={changeFormData}
        />
        <input 
          type="submit" 
          value="Add Task"
        />
      </form>
    </div>
  )
}

export default AddTaskForm