import { Dimensions } from 'react-native'

const dimensions = {
    'width': Dimensions.get('window').width,
    'height': Dimensions.get('screen').height,
    'safeHeight': Dimensions.get('window').height
};

const color = {
    'primary': '#6750A4',
    'onPrimary': '#FFFFFF',
    'primaryContainer': '#EADDFF',
    'onPrimaryContainer': '#21005D',
    'background': '#FFFBFE',
    'onBackground': '#000000'
};


export { color, dimensions }