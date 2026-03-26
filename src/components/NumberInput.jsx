export default function NumberInput({ label, inputIndentifier, handleChange }) {
    const onChange = (event) => {
        handleChange(inputIndentifier, event.target.value);
    }
    
    return (<p>
        <label>{label}</label>
        <input type="number" required onChange={onChange} />
    </p>)
}