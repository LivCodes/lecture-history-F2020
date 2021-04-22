function Task(props){
    return (
        <li>{props.task.title} (Due {props.task.due})</li>
    )
}

export default Task