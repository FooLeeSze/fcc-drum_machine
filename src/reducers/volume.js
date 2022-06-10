const volumeReducer = (state = '50', action) => {
    switch(action.type) {
        case 'CHANGE_VOLUME':
            return action.newVolume
        default:  
            return state
    }
}

export default volumeReducer;