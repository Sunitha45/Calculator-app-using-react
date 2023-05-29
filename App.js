import './App.css'
import {useState} from "react"
import keypad from './keypad'
function App(){
    let [input, setInput]=useState("")
    function handleClick(value){
        setInput(input+value)
    }
    function calculate(value){
        let outputVal=eval(input)
        setInput(outputVal)
    }
    function handleClear(){
        setInput("")
    }
    return(
        <div className='container'>
         <h>calculator app using react</h>   
         <div className='calculator'>
            <input type="text" value={input} className='output'read only/>
            <keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></keypad>
         </div>
        </div>
    )
}
export default App;