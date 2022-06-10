const displayReducer = (state='PLAY A BEAT...', action) => {
    switch(action.type) {
        case 'UPDATE_DISP': 
            return action.displayText;
        default:
            return state;
    }
}

export default displayReducer;