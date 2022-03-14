import { NativeModules, Platform } from 'react-native';

import fr from './fr-FR';
import en from './en-EN';

const phoneLanguage = Platform.OS === 'ios' ?
    NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] :
    NativeModules.I18nManager.localeIdentifier;

const translate = (key) => {
    switch (phoneLanguage) {
        case 'fr-FR': return fr[key];
        case 'en-EN':
        case 'en-US': return en[key];
        default: return fr[key];
    }
}

export default translate;