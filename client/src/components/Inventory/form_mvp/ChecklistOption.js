import React from 'react'

const ChecklistOption = ({option, checkListClickHandler}) => {
    return (
        <div className = "title-of-option">
            
            <label className = "checkbox-container" htmlFor = {option}>  
                <input className = "checkbox-style" onChange = {checkListClickHandler} type="checkbox" name = {option} value = {option} />
                {option}
            </label>
        </div>
    )
}

export default ChecklistOption

