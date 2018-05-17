import React from 'react' 
import TodoList from '../TodoList' 
import PropTypes from 'prop-types'
import './todoApp.css'
import {connect} from 'react-redux'
import {addTodo, editTodo, deleteTodo, checkTodo} from '../../actions'

class TodoApp extends React.Component {
    onCheck = (id) => {
        this.props.checkTodo(id)
    } 

    onDelete = (id) => {
        this.props.deleteTodo(id)
    } 

    onSubmit =  (e) => {
        e.preventDefault() 
        if(this.input.value.trim() === ''){
            return false 
        }
        this.props.addTodo(this.input.value.trim())
    } 

    onEdit = (id, editedTitle) => {
        this.props.editTodo(id, editedTitle)
    }


    render() {
        return (
            <div className = 'todo-app'>
                <form  onSubmit = {this.onSubmit}>
                    <div className = 'input-group'>
                        <input className = 'form-control' ref = {(node) => this.input = node}  type = 'text' name = 'text' />
                        <span className = 'input-group-btn'>
                            <button className = 'btn btn-primary' type = 'submit'>Send</button>
                        </span>
                    </div>
                </form>
                <TodoList onEdit = {this.onEdit} onDelete = {this.onDelete} onCheck = {this.onCheck} todos = {this.props.todos} />
            </div>
            )
    }
}

TodoApp.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
        taskTitle: PropTypes.string
    }))
} 
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = {addTodo, editTodo, deleteTodo, checkTodo}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)