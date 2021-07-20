import React, {useState} from 'react';
import ExpandIcon from '../../static/images/expand_icon.png';
import '../../static/heading.scss';

const Heading = ({themeColor, title}) => {
    let expandState = "right";
    function expandFunc (event) {
        let arrow = document.querySelector('.expand-icon')
        if (expandState == "right"){
            arrow.style.animationName = "turn-arrow-down";
            arrow.style.animationPlayState = "running";
            expandState = "down";
        } else {
            arrow.style.animationName = "turn-arrow-sideways";
            expandState = "right";
        }
    }



    return (
        <div style = {{backgroundColor: themeColor}} className = "heading-container">
            <img onClick = {expandFunc} className = "expand-icon" src= { ExpandIcon } alt="Expand Icon" />
            <h3 className = "title-heading"> { title } </h3>
        </div>
    )
}

export default Heading; 
