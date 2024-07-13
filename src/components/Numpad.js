import ShowOutput from "./ShowOutput";
import { useState } from "react"
import "./Numpad.css"

let num1;
let num2;
let operand;
let result;

function Numpad() {
    const [ num, setNum ] = useState("0")
    // const [ operator, setOperator ] = useState("")

    const addNumber = (e) => {
        setNum(num + e.target.innerText)
        if (num === "/" || num === "*" || num === "-" || num === "+" || num === "0") {
            operand = (num === "0" ? void(0) : num)
            console.log(`${num1} ${operand}`);
            setNum("")
            setNum(e.target.innerText)
        }
        // console.log("miss ko na sya")
    }

    const addOperator = (e) => {
        num !== "" ? setNum("") : void(0) 
        num1 = num
        setNum(e.target.innerText)

        console.log(num1);
    }

    const getResult = () => {
        result = (operand !== "" ? eval(`${num1}${operand}${num}`) : void(0))
        setNum(result % 1 != 0 ? result.toFixed(2) : result)
        num1 = result
        operand = ""
    }

    const backspace = () => {
        let numInScreen = num
        setNum(numInScreen.split("").slice(0, -1).join(""))
    }

    const clearScreen = () => {
        setNum("")
    }

    return (
        <>
            <ShowOutput no={num} />
            <div className="numpads">
                <div className="num" onClick={clearScreen}>C</div>
                <div className="num" onClick={addOperator}>/</div>
                <div className="num" onClick={addOperator}>*</div>
                <div className="num" onClick={backspace}>K</div>
                <div className="num" onClick={addNumber}>7</div>
                <div className="num" onClick={addNumber}>8</div>
                <div className="num" onClick={addNumber}>9</div>
                <div className="num" onClick={addOperator}>-</div>
                <div className="num" onClick={addNumber}>4</div>
                <div className="num" onClick={addNumber}>5</div>
                <div className="num" onClick={addNumber}>6</div>
                <div className="num" onClick={addOperator}>+</div>
                <div className="num" onClick={addNumber}>1</div>
                <div className="num" onClick={addNumber}>2</div>
                <div className="num" onClick={addNumber}>3</div>
                <div className="num equals" onClick={getResult}>=</div>
                <div className="num" onClick={addNumber}>%</div>
                <div className="num" onClick={addNumber}>0</div>
                <div className="num" onClick={addNumber}>.</div>
            </div>
        </>
    )
}

export default Numpad