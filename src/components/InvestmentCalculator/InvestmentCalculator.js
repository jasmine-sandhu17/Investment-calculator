import { useState } from "react";

export default function Calculator(props) {
    const [userInput, setUserInput] = useState({
        'current-savings': 1000,
        'yearly-contribution': 10000,
        'expected-return': 10,
        'duration': 20
    })
    const calculateHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    }
    function inputHandler(input, value) {
        setUserInput((preValue) => {
            return {
                ...preValue, [input]: +value
            }
        })
    }
    function handleReset() {
        setUserInput({
            'current-savings': '',
            'yearly-contribution': '',
            'expected-return': '',
            'duration': ''
        })
    }
    return (
        <form className="form" onSubmit={calculateHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" value={userInput['current-savings']} id="current-savings" onChange={(event) => inputHandler('current-savings', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" value={userInput['yearly-contribution']} id="yearly-contribution" onChange={(event) => inputHandler('yearly-contribution', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" value={userInput['expected-return']} id="expected-return" onChange={(event) => inputHandler('expected-return', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" value={userInput['duration']} id="duration" onChange={(event) => inputHandler('duration', event.target.value)} />
                </p>
            </div>
            <p className="actions">
                <button onClick={handleReset} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}