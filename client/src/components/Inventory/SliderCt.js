import React from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import '../../static/slider.scss';
import Handle from './Handle';
import Track from './Track';

const SliderCt = ({ updateCtParams }) => {
    return (
        <Slider
            onChange = { updateCtParams }
            className = "slider-container-ct"
            domain={[0, 7]}
            values={[0, 7]} 
            step = {0.1} >

            <div className="rail" />
            <Handles>
                {({ handles, getHandleProps }) => (
                    <div className="slider-handles">
                    {handles.map(handle => (
                        <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                        />
                    ))} 
                    </div>
                )}
            </Handles>
            <Tracks
                left = {false}
                right = {false} >
                {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                        <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                        />
                    ))}
                    </div>
                )}
            </Tracks>
            <Rail>
                {({ getRailProps }) => (
                    <div className = "rail" {...getRailProps()} />
                )}
            </Rail>
        </Slider>
    )
}

export default SliderCt;
