const powerReducer = (state = true, action) => {
    switch(action.type) {
        case 'ON-OFF':
            return !state;
        default:
            return state;
    }
} 

export default powerReducer