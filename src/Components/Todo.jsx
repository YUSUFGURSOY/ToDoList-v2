import React, { useState } from 'react';
import styled from 'styled-components';
import DelBtn from './DelBtn';
import EdtBtn from './EdtBtn';
import Checkbox from './Checkbox';

function Todo({ todo, todoKey, onDelete }) {
    const [completed, setCompleted] = useState(false);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };




    return (
        <TodoWrapper>
            <div className={`todo-content ${completed ? 'completed' : ''}`} onClick={toggleCompleted}>
                <Checkbox checked={completed} todoKey={todoKey} />
                <span className="todo-text">{todo.content}</span>
            </div>
            <div className="icons">
                <EdtBtn />
                <DelBtn onDelete={() => onDelete(todoKey)} />
            </div>
        </TodoWrapper>
    );
}

export default Todo;

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 5px solid #ccc;

  .todo-content {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .todo-content.completed .todo-text {
    text-decoration: line-through;
    color: #999;
    transition: all 0.3s ease;
  }

  .icons {
    display: flex;
    gap: 5px;
  }
`;
