import React, { useState } from 'react'
import '../../../static/parameters.scss'

const Bounds = ({ title, lowerDefault, upperDefault, unit, stateUpdater, maxLengthForField}) => { 
    const [lowerNum, setLowerNum] = useState("")
    const [upperNum, setUpperNum] = useState("")

    const lowerUpdate = (event) => {
        setLowerNum(event.target.value)
        stateUpdater([event.target.value, upperNum])
    }

    const higherUpdate = (event) => {
        setUpperNum(event.target.value)
        stateUpdater([lowerNum, event.target.value])
    }

    // if (Number.isNaN(parseInt("how to check for num"))) {
    //    console.log('alodaj')
    // }

    return (
        <div className = "bounds-container" >
            <h1 className = "bounds-title" > {title} </h1>
            <div className="input-container">
                <input placeholder = "From" onChange = {lowerUpdate} value = {lowerNum} className = "number-field" type="text" maxLength = {maxLengthForField} />
                <input placeholder = "To" onChange = {higherUpdate} value = {upperNum} className = "number-field" type="text" maxLength = {maxLengthForField}/>
            </div>
        </div>
    )
}

export default Bounds;
