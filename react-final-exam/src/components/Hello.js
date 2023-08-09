import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const Hello = () => {
    const [name, setName] = useState("");

    return (
        <>
            <p>Enter your name: {name}</p>
            <div>
                <input name="nameInput"
                />
                <button type="submit">Submit</button>
            </div>
        </>
    );
}

export default Hello;