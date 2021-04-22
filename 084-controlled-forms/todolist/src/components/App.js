import { useState } from 'react';
import '../App.css';
import AddTaskForm from './AddTaskForm'
// import SearchBar from './SearchBar'
import TaskList from './TaskList'

const data = [
  {id: 1, title: "Wake up", due: "today", done: false},
  {id: 2, title: "Do work", due: "tomorrow", done: false},
  {id: 3, title: "Go to bed", due: "today", done: false}
]

function App() {
  const [tasks, setTasks] = useState(data)
  const [searchTerm, setSearchTerm] = useState("")

  function search(e){
    setSearchTerm(e.target.value)
  }

  return (
    <div className="App">
      <AddTaskForm/>
      <input type="text" placeholder="Search tasks" value={searchTerm} onChange={search}/>
      <TaskList tasks={tasks} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
