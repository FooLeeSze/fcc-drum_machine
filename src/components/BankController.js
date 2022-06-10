import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateDisplay } from '../actions/display.js'
import { setBankA, setBankB } from '../actions/audioUrl.js'
import { bankOnStyle, bankOffStyle } from '../utils/constants.js'
import { displayTextLibrary } from '../utils/constants.js'


export default function BankController() {

    const dispatch = useDispatch();

    // Access Bank no. & power state from Redux store
    const { libNum } = useSelector(state => state.audioFiles);
    const power = useSelector(state => state.power)
    
    // Function to set Bank no. and update display on change
    function handleChange(event) {
        dispatch(updateDisplay(displayTextLibrary[event.target.id]))

        if (event.target.id === "Bank 1") {
            dispatch(setBankA())
        } else if (event.target.id === "Bank 2") {
            dispatch(setBankB())
        }
    }

    return (
        <div id="bank-container" className="ctrl-container">
            <p id="bank-container-label" className="ctrl-label">SOUND BANK</p>
            <label htmlFor="Bank 1" className="bank-btn-label">BANK A
                <input type="radio" className="bank-btn-radio" id="Bank 1" name="sound-bank" value="bank1" 
                        onChange={handleChange} checked={libNum === 1} />
                <span className="bank-btn" style={libNum === 1 ? (power ? bankOnStyle : bankOffStyle) : {}}></span>
            </label>
            <label htmlFor="Bank 2" className="bank-btn-label">BANK B
                <input type="radio" className="bank-btn-radio" id="Bank 2" name="sound-bank" value="bank2" 
                        onChange={handleChange} checked={libNum === 2} />
                <span className="bank-btn" style={libNum === 2 ? (power ? bankOnStyle : bankOffStyle) : {}}></span>
            </label>
        </div>
    )
}