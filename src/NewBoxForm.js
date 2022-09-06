import React, {useState} from "react";

function NewBoxForm({addBox}) {
    const [formValues, setFormValues] = useState({width:"10", height:"10", backgroundColor:"blue"})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues(data => ({
            ...data,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let {width, height, backgroundColor} = formValues;
        width = Number(width);
        height = Number(height);
        addBox({backgroundColor, width, height});
        setFormValues({width:"", height:"", backgroundColor:""})
    }

    return (
        <form id="newBoxForm" onSubmit={handleSubmit} >
            <label htmlFor="width">Width</label>
            <input id="width" type="number" name="width" onChange={handleChange} value={formValues.width}/>
            <label htmlFor="height">Height</label>
            <input id="height" type="number" name="height" onChange={handleChange} value={formValues.height}/>
            <label htmlFor="backgroundColor">Color</label>
            <input id="backgroundColor" type="text" name="backgroundColor" onChange={handleChange} value={formValues.backgroundColor}/>
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;