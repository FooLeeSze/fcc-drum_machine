import React from 'react'
import DrumPadContainer from './components/DrumPadContainer'
import BankController from './components/BankController';
import Display from './components/Display';
import PowerController from './components/PowerController';
import VolumeController from './components/VolumeController';

export default function DrumMachine() {
    return (
        <div id='drum-machine'>
            <DrumPadContainer />
            <div id="controls">
                <Display />
                <VolumeController />
                <BankController />
                <PowerController />
            </div>
        </div>
    )
}