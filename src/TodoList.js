import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
    const INITIAL_STATE = [
        { todoText: "get groceries", id: 1, key: 1 },
        { todoText: "do laundry", id: 2, key: 2 }
    ]
    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (todoText) => {
        const key = uuidv4();
        setTodos([...todos, { todoText, id: key, key }])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id != id));
    }

    return (
        <div className="todoList">
            <NewTodoForm addTodo={addTodo} />
            <ul>
            {todos.map(({todoText, id, key}) => (<Todo todoText={todoText} id={id} key={key} deleteTodo={deleteTodo} />))}
            </ul>
        </div>
    )

}

export default TodoList;