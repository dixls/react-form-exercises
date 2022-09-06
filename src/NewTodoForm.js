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
        <form onSubmit={submitHandler}>
            <label htmlFor=""></label>
            <input type="text" value={formValues.todoText} onChange={handleChange} />
        </form>
    )
}

export default NewTodoForm;