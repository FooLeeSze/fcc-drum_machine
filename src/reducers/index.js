import { combineReducers } from '@reduxjs/toolkit'
import displayReducer from './display'
import audioFilesReducer from './audioUrl'
import powerReducer from './power'
import volumeReducer from './volume'

const allReducers = combineReducers({
    display: displayReducer,
    audioFiles: audioFilesReducer,
    power: powerReducer,
    volume: volumeReducer
})

export default allReducers