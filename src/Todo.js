import React, { useState } from "react";

function Todo({ todoText, id, deleteTodo }) {
    const clickHandler = (e) => {
        e.preventDefault();
        deleteTodo(id);
    }

    return (
        <li>
            <button onClick={clickHandler} >x</button> {todoText}
        </li>
    )
}

export default Todo;