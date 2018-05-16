import list from '../todos'
import { getTodoById } from '../utils'


const handleAddTodo = (state, payload) => {
    return state.concat({
            taskTitle: payload.taskTitle,
            id: Math.round(Math.random() * 10000),
            done: false
        })
}

const handleEditTodo = (state, payload) => {
    const item = getTodoById(state, payload.id)
    const index = state.indexOf(item)
    item.taskTitle = payload.title

    return state.slice(0, index).concat(item, state.slice(index + 1, state.length))
}

const handleDeleteTodo = (state, payload) => {
    return state.filter((item) => item.id !== payload.id)
}

const todos = (state = list, action) => {
    const {type, payload} = action

    switch(type) {
        case 'ADD_TODO':
            return handleAddTodo(state, payload)

        case 'EDIT_TODO':
            return handleEditTodo(state, payload)

        case 'DELETE_TODO':
            return handleDeleteTodo(state, payload)

        default:
            return state;

    }
}

export default todos