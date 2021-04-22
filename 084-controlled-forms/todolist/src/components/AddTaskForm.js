import {useState} from 'react'

function AddTaskForm(){
    return (
        <div className="border">
            <h3>Add Task Form</h3>
            <form onSubmit>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="due" placeholder="Due Date" />
                <input type="submit" value="Add Task"/>
            </form>
        </div>
    )
}

export default AddTaskForm