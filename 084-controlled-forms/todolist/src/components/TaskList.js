import Task from './Task'

function TaskList(props){
    //help functions to generate other useful stuff
    function getFilteredTasks(){
        return props.tasks.filter(taskObj => taskObj.title.toLowerCase().includes(props.searchValue.toLowerCase()))
    }

    return (
        <div className="list">
            {getFilteredTasks().map((taskObj, i) => <Task key={i} task={taskObj}/>)}
        </div>
    )
}

export default TaskList