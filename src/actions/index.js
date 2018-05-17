export const addTodo = (taskTitle) => {
    return {
        type: 'ADD_TODO',
        payload: { taskTitle }
    }
}

export const editTodo = (id, taskTitle) => {
    return {
        type: 'EDIT_TODO',
        payload: {id, taskTitle}
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: {id}
    }
}

export const checkTodo = (id) => {
    return {
        type: 'CHECK_TODO',
        payload: {id}
    }
}