export const drumPadActiveStyle = {
    transform: 'translate(1px, 1px)',
    borderTop: 'solid rgb(124, 124, 124) 3px',
    borderLeft: 'solid rgb(124, 124, 124) 3px',
    borderRight: 'none',
    borderBottom: 'none'
}

export const drumPadNormalStyle = {
    borderBottom: 'solid rgb(157, 157, 157) 3px',
    borderRight: 'solid rgb(157, 157, 157) 3px'
}

export const displayOffStyle = {
    backgroundColor: '#434343'
}

export const displayOnStyle = {
    backgroundColor: 'blue'
}

export const bankOnStyle = {
    backgroundColor: 'rgb(245, 245, 0)',
    boxShadow: '0 0 5px rgb(245, 245, 0)'
}

export const bankOffStyle = {
    backgroundColor: 'rgb(255, 204, 0)',
    boxShadow: 'none'
}

export const displayTextLibrary = {
    'Bank 1': 'ELECTRO',
    'Bank 2': 'VINYL',
    'Power On': 'PLAY A BEAT...',
    'volume-ctrl': 'VOLUME',
    1: {
        Q: 'Elec Hi Hat', 
        W: 'Elec Kick 1', 
        E: 'Elec Kick 2', 
        A: 'Elec Open Hat', 
        S: 'Elec Snare 1', 
        D: 'Elec Snare 2', 
        Z: 'Elec Tom 1', 
        X: 'Elec Tom 2', 
        C: 'Elec Tom 3'},
    2: {
        Q: 'Vinyl Hi Hat', 
        W: 'Vinyl Kick 1', 
        E: 'Vinyl Kick 2', 
        A: 'Vinyl Open Hat', 
        S: 'Vinyl Ride', 
        D: 'Vinyl Snare 1', 
        Z: 'Vinyl Snare 2', 
        X: 'Vinyl Tom 1', 
        C: 'Vinyl Tom 2'}
}