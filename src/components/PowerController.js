import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleOnOff } from '../actions/power'
import { updateDisplay } from '../actions/display';
import { displayTextLibrary } from '../utils/constants';

export default function PowerController() {
    const dispatch = useDispatch();

    // Function to update power state & display text on click
    function handleClick() {
        dispatch(toggleOnOff())
        dispatch(updateDisplay(displayTextLibrary['Power On']))
    }

    return (
        <div id="power-btn-container">
            <p id="power-label">POWER</p>
            <label id="power-label">
                <input type="checkbox" id="power-btn-checkbox" onClick={handleClick} />
                <span id="power-btn"></span>
            </label>
        </div>
    )
}