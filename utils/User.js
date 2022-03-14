import * as SecureStore from 'expo-secure-store';

export const disconnect = (navigation) => {
    navigation.navigate('AuthenticationNavigator');
    SecureStore.deleteItemAsync('params');
}