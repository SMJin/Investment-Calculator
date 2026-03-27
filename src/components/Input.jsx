import { useState } from "react";

export default function Input({label, initialValue, keyData, onChange}) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(keyData, event.target.value);
    }

    return (<p>
        <label>{label}</label>
        <input type="number" 
            value={value} 
            onChange={handleChange} 
            required 
        />
    </p>)
}