import Task from './Task'

function TaskList(props){
    return (
        <div className="border">
            {props.tasks.filter(task => task.title.includes(props.searchTerm)).map(task => <Task key={task.id} task={task}/>)}
        </div>
    )
}

export default TaskList