import '../App.css';
const Cars = () => {
    const Cars = ["Ford", "BMW", "Audi"]
    return (
        <div className='Cars-font-style'>
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