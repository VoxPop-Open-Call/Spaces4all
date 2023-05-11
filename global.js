import { StatusBar, Dimensions } from 'react-native';
import { getLocales } from 'expo-localization';

const dimensions = {
    'width': Dimensions.get('window').width,
    'height': Dimensions.get('screen').height,
    'safeHeight': Dimensions.get('window').height,
    'navBar': Dimensions.get('screen').height - (StatusBar.currentHeight + Dimensions.get('window').height),
    'statusBar': StatusBar.currentHeight
};

const color = {
    'primary': '#6750A4',
    'onPrimary': '#FFFFFF',
    'primaryContainer': '#EADDFF',
    'onPrimaryContainer': '#21005D',
    'background': '#FFFBFE',
    'onBackground': '#000000'
};

const rawLocale = getLocales()
const locale = rawLocale[0].languageCode === 'pt' ? 'pt-PT' : 'en-GB'

export { color, dimensions, locale }

