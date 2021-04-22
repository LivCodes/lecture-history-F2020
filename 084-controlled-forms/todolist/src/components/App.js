import {useState} from 'react'
import AddTaskForm from './AddTaskForm'
import SearchBar from './SearchBar'
import TaskList from './TaskList'

const data = [
  {title: "Wake up", due: "today"},
  {title: "Do work", due: "tomorrow"},
  {title: "Work out", due: "tomorrow"},
  {title: "Go to bed", due: "today"}
]

function App() {
  const [tasks, setTasks] = useState(data)
  const [searchValue, setSearchValue] = useState("")

  //state changing callback function
  function changeSearchValue(event) {
    setSearchValue(event.target.value)
  }

  //state changing callback function
  // function addingTask(newTaskObj){
  //   setTasks(prevTasks => [...prevTasks, newTaskObj])
  // }

  return (
    <div className="App">
      <AddTaskForm 
        setTasks={setTasks}
      />
      <SearchBar 
        searchValue={searchValue} 
        changeSearchValue={changeSearchValue}
      />
      <TaskList 
        tasks={tasks} 
        searchValue={searchValue}
      />
    </div>
  );
}

export default App;
