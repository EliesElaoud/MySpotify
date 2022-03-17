import * as SecureStore from 'expo-secure-store';

export const getConfig = async () => {
    const logParams = await SecureStore.getItemAsync('params');
    const token = JSON.parse(logParams)?.token;

    return {
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    };
}

export const isTokenExpired = async () => {
    const logParams = await SecureStore.getItemAsync('params');

    if (logParams != null) {
        const deserializedParams = JSON.parse(logParams);
        const expiresIn = parseInt(deserializedParams.expires_in)
        const expirationDate = deserializedParams.datetime + expiresIn * 1000;
        
        return Date.now() >= expirationDate;
    }

    return true;
}