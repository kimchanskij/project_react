import React, { useState } from 'react';
import Todo from './Todo'
import '../styles/Todolist.css'

const Todolist = function ({ todos }) {
    return (
        <div className='todolist'>
            {todos.map((item, index) => {
                return (
                    <Todo index={index + 1} todoInfo={item} key={item.id} />
                )
            })}
        </div>
    )
}

export default Todolist