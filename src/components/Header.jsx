import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const Header = function (prop) {

    const [title, setTitle] = useState('');

    const [body, setBody] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            title,
            body
        }
        prop.setTodos([...prop.todos, newTodo])
    }

    return (
        <div className='header'>
            <form>
                <MyInput value={title} onChange={e => setTitle(e.target.value)} type='text' placeholder='Название задачи' />
                <MyInput value={body} onChange={e => setBody(e.target.value)} type='text' placeholder='Описание задачи' />
                <MyButton onClick={addTodo}>Добавить</MyButton>
            </form>
        </div>
    )
}

export default Header