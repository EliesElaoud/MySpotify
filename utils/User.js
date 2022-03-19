import * as SecureStore from 'expo-secure-store';

export const disconnect = (appContext) => {
    SecureStore.deleteItemAsync('params');
    appContext.updateNavigator('Authentication');
}