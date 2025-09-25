import React, { useState } from 'react';
import '../Css/TodoCreate.css';
import '../Css/TodoList.css';
import Button from './Button';
import TodoList from './todoList';

function TodoCreate({ onCreateTodo, todos, onDelete }) {
    const [newTodo, setNewTodo] = useState('');

    const createTodo = (e) => {
        e.preventDefault(); // sayfa yenilenmesini engelle
        if (!newTodo.trim()) return;

        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        };
        onCreateTodo(request);
        setNewTodo("");
    };

    return (
        <div className='container'>
            <form className="Form" onSubmit={createTodo}>
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="InputAddTodo"
                    placeholder="Lütfen bir todo giriniz"
                />
                <Button type="submit" /> {/* artık doğru */}
            </form>

            <div className='ccontainer'>
                <TodoList todos={todos} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default TodoCreate;
