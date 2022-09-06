import React, { useState } from "react";

function NewTodoForm ({addTodo}) {
    const INITIAL_STATE = {
        todoText: "New Todo"
    }
    const [formValues, setFormValues] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues(data => ({
            ...data,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formValues.todoText);
        setFormValues({todoText:""});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoText">Add a todo item</label>
            <input id="todoText" name="todoText" type="text" value={formValues.todoText} onChange={handleChange} />
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;