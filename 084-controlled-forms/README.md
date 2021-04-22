# Controlled Forms

## Planning our React App

### Component Hierarchy 
```
App 
 |- AddTaskForm
 |- Searchbar
 |- TaskList
      |- Task
          ...
```

### Planning for State
Brainstorm
X tasks (represents all of our tasks)
X searchValue

- titleText 
- dueDateText

## Why Controlled Forms?

* A Controlled Component is one where the `value` is set by state, but state is also set by the `value`. In other words, the form controlls the state, and state controlls the form (2-way Binding)

> In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components

* Easy to manage data, no more `document.querySelector`

* Single Source of Truth 