import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateDisplay } from '../actions/display'
import { displayTextLibrary } from '../utils/constants';
import { drumPadActiveStyle, drumPadNormalStyle } from '../utils/constants';

export default function DrumPad(props) {
    // Local state to activate pad (for styling)
    const [active, setActive]  = React.useState(false);

    // Access audio files & volume state in Redux store
    const dispatch = useDispatch();
    const { libNum, audioFiles } = useSelector(state => state.audioFiles);
    const volume = useSelector(state => state.volume);
    const power = useSelector(state => state.power);
    
    // Function to play sound and update display text state upon activation
    function activatePad(id) {
        if (power) {
            // Update display text
            dispatch(updateDisplay(displayTextLibrary[libNum][id]))

            const elem = document.getElementById(id);

            // Load audio and volume, then play
            elem.currentTime = 0;
            elem.load();
            elem.volume = Number(volume) / 100;
            elem.play();
        }

        // Activate pad (for styling)
        setActive(true)
    }

    // Function to activate pad on mouse down
    function handleClick(event) {
        let id = event.target.id.split('-')[0];
        activatePad(id)
    }

    // Function to deactivate pad (for styling)
    function handleDeactivate() {
        setActive(false)
    }

    // Function to activate pad on key down
    function handleKeyDown(event) {
        var key = event.key;
        var keyCode = props.id.toLowerCase();
        
        if(key === keyCode || key === keyCode.toUpperCase()) {
            let id = key.toUpperCase();
            activatePad(id)
            setTimeout(() => setActive(false), 100)
        }
    }

    // Function to stop audio playing
    function stopSound() {
        const elem = document.getElementById(props.id);
        elem.pause();
    }

    // Listen/stop listening for keydown on power on/off
    useEffect( () => {
        window.addEventListener('keydown', handleKeyDown);
        return () =>  window.removeEventListener('keydown', handleKeyDown);
    }, [power])

    // Stop playing sound when power off
    useEffect(stopSound, [power])

    return (
        <button style={active ? drumPadActiveStyle : drumPadNormalStyle} type="button" className="drum-pad"  id={`${props.id}-pad`}
                onMouseDown={handleClick} onMouseUp={handleDeactivate} onKeyDown={handleKeyDown} tabIndex="0">{props.id}
            <audio className="clip" src={audioFiles[props.index]} type="audio/wav" id={props.id}>
            </audio>
        </button>
    )
}