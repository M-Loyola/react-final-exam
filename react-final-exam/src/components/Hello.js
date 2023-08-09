import { useState } from "react";

const Hello = () => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(event.target.nameInput.value);
    }

    return (
        <>
            <p>Enter your name: {name}</p>
            <form onSubmit={handleSubmit}>
                <input name="nameInput"/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Hello;