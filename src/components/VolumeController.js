import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeVolume } from '../actions/volume'
import { updateDisplay } from '../actions/display';
import { displayTextLibrary } from '../utils/constants';
 
export default function VolumeController() {
    const dispatch = useDispatch();

    // Access volume state from Redux store
    const  volume  = useSelector(state => state.volume);

    // Function to update volume & display text on input
    function handleInput(event) {
        let newVolume = event.target.value;
        dispatch(changeVolume(newVolume));
        dispatch(updateDisplay(`${displayTextLibrary[event.target.id]} ${newVolume}`));
    }

    return (
        <div id="volume-ctrl-container" className="ctrl-container">
            <label id="volume-ctrl-label" htmlFor="volume-ctrl" className="ctrl-label">VOLUME</label>
            <input type="range" min="0" max="100" value={volume} id="volume-ctrl" onInput={handleInput} />
        </div>
    )
}