export function extractAudioFiles(folder, library) {
    let audio = {
        0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: ''
    }

    return Object.keys(audio).map((key, index) => require(`../samples/${folder}${library[key]}`))
}