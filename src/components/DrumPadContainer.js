import React from 'react'
import DrumPad from './DrumPad'

export default function DrumPadContainer() {
    return (
        <div id="drum-pad-container">
            <DrumPad id="Q" index="0" />
            <DrumPad id="W" index="1" />
            <DrumPad id="E" index="2" />
            <DrumPad id="A" index="3" />
            <DrumPad id="S" index="4" />
            <DrumPad id="D" index="5" />
            <DrumPad id="Z" index="6" />
            <DrumPad id="X" index="7" />
            <DrumPad id="C" index="8" />
        </div>
    )
}