import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';

const Todo = function ({ index, todoInfo }) {
    return (
        <div className='todo'>
            <div className="todo__body">
                <h1 className='todo__title'>
                    {index}. {todoInfo.title}
                </h1>
                <p className='todo__description'>
                    {todoInfo.body}
                </p>
            </div>
            <MyButton>Удалить</MyButton>
        </div>
    )
}

export default Todo