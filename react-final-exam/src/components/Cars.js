const Cars = () => {
    const Cars = ["Ford", "BMW", "Audi"]

    const fontStyle = {
        fontFamily: 'Times New Roman'
    }

    return (
        <div style={fontStyle}>
            <h1>Who lives in my garage?</h1>
            <ul>
                {Cars.map((car, index) => (
                    <li key={index}>I am a {car}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cars;