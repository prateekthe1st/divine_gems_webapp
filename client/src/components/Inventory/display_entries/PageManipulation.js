import React from 'react'
import './page_manipulation.scss'

const PageManipulation = ({ callback, current, total }) => {
    if (total === 0) {
        return (
            <div className = "nothing"> </div>
        )
    }

    let first;
    if (current > 50) {
        first = <h3 className = "external" onClick = {callback} change = {-1}> {current / 50} </h3>
    }

    let last;
    if (current + 100 < total) {
        last = <h3 className = "external" onClick = {callback} change = {Math.floor(total/50) - (current/50)}> ...{Math.floor(total / 50) + 1} </h3>
    }

    let next;
    if (current + 50 < total) {
        next = <h3 className = "external" onClick = {callback} change = {1} > {current / 50 + 2} </h3>
    } 

    return (
        <div className = "page-change-container">
            {first}
            <h3 className = "center-page" onClick = {callback} change = {0} > {current / 50 + 1} </h3>
            {next}
            {last}
        </div>
    )
}

export default PageManipulation
