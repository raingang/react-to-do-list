import list from '../todos'
import { getTodoById } from '../utils'
import { ADD_TODO, EDIT_TODO, CHECK_TODO, DELETE_TODO} from '../constants'

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
    item.taskTitle = payload.taskTitle

    return state.slice(0, index).concat(item, state.slice(index + 1, state.length))
}

const handleDeleteTodo = (state, payload) => {
    return state.filter((item) => item.id !== payload.id)
}

const handleCheckTodo = (state, payload) => {
    const item = getTodoById(state, payload.id)
    const index = state.indexOf(item)
    item.done = !item.done

    return state.slice(0, index).concat(item, state.slice(index + 1, state.length))
}

const todos = (state = list, action) => {
    const {type, payload} = action

    switch(type) {
        case ADD_TODO:
            return handleAddTodo(state, payload)

        case EDIT_TODO:
            return handleEditTodo(state, payload)

        case DELETE_TODO:
            return handleDeleteTodo(state, payload)

        case CHECK_TODO:
            return handleCheckTodo(state, payload)

        default:
            return state;

    }
}

export default todos