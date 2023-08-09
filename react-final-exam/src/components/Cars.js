const Cars = () => {
    const Cars = ["Ford", "BMW", "Audi"]

    const fontStyle = {
        fontFamily: 'Times New Roman'
    }

    return (
        <>
            <h1 style={fontStyle}>
                Who lives in my garage?
            </h1>
            <ul>
                {Cars.map((car, index) => (
                    <li style={fontStyle} key={index}>{car}</li>
                ))}
            </ul>
        </>
    );
}

export default Cars;