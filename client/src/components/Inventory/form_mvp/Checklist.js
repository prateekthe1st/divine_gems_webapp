import React from 'react'
import ChecklistOption from './ChecklistOption'
import '../../../static/checklist.scss'

const Checklist = ({ updateChecklistState, title, list }) => {
    const checkListClickHandler = event => {
        updateChecklistState(event, title);
    }

    return (
        <div className = "checklist-container">
            <h1 className = "checklist-title" > {title} </h1>
            {list.map(option => (
                <ChecklistOption key = {option} option = {option} checkListClickHandler = {checkListClickHandler} />
            ))}
        </div>
    )
}

export default Checklist
