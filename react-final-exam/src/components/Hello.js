import { useState } from "react";

const Hello = () => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(event.target.nameInput.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your name: {name}</label><br/>
                <input name="nameInput"/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Hello;