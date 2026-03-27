import { useState } from "react";

export default function Input({label, keyData, onChange}) {
    const [value, setValue] = useState(0);

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