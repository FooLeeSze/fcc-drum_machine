export const changeVolume = (newVolume) => {
    return {
        type: 'CHANGE_VOLUME',
        newVolume: newVolume
    }
}