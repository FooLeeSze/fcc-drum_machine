import { extractAudioFiles } from '../utils/utils';

const folder1 = 'electro/';
const folder2 = 'vinyl/';

const audioLibrary1 = [
    'CYCdh_ElecK01-ClHat01.wav',
    'CYCdh_ElecK01-Kick01.wav',
    'CYCdh_ElecK01-Kick02.wav',
    'CYCdh_ElecK01-OpHat02.wav',
    'CYCdh_ElecK01-Snr01.wav',
    'CYCdh_ElecK01-Snr02.wav',
    'CYCdh_ElecK01-Tom01.wav',
    'CYCdh_ElecK01-Tom02.wav',
    'CYCdh_ElecK01-Tom03.wav'
]

const audioLibrary2 = [
    'CYCdh_VinylK2-ClHat.wav',
    'CYCdh_VinylK2-Kick02.wav',
    'CYCdh_VinylK2-Kicki01.wav',
    'CYCdh_VinylK2-OpHat01.wav',
    'CYCdh_VinylK2-Ride01.wav',
    'CYCdh_VinylK2-Snr01.wav',
    'CYCdh_VinylK2-Snr02.wav',
    'CYCdh_VinylK2-Tom01.wav',
    'CYCdh_VinylK2-Tom02.wav'
]

const iniFiles = extractAudioFiles(folder1, audioLibrary1);

const audioFilesReducer = (state = {libNum: 1, audioFiles: iniFiles}, action) => {
    
    switch(action.type) {
        case 'BANKA':
            return {
                libNum: 1,
                audioFiles: extractAudioFiles(folder1, audioLibrary1)
            }
        case 'BANKB':
            return {
                libNum: 2,
                audioFiles: extractAudioFiles(folder2, audioLibrary2)
            }
        default:
            return state
    }
}

export default audioFilesReducer