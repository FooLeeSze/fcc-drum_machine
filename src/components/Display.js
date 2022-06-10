import React from 'react'
import { useSelector } from 'react-redux'
import { displayOffStyle, displayOnStyle } from '../utils/constants'

export default function Display() {

    // Access display and power states from Redux store
    const displayState = useSelector(state => state.display)
    const power = useSelector(state => state.power)

    // Change display text depending on power state
    return (
        <div id="display-container">
            <div id="display" style={power ? displayOnStyle : displayOffStyle}>
                <p id="display-text">{power ? displayState : ''}</p>
            </div>
            <h1 id="machine-name">DM123</h1>
        </div>
    )
}