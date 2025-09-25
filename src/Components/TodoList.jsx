import React from 'react'
import '../Css/TodoList.css'
import Todo from './Todo'

function TodoList({ todos, onDelete }) {


    return (
        <>

            <div>
                {
                    todos && todos.map((todo) => {
                        return <Todo key={todo.id} todo={todo} todoKey={todo.id} onDelete={onDelete} />
                    })

                }


            </div>

        </>







    )
}

export default TodoList