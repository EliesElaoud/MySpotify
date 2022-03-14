import * as SecureStore from 'expo-secure-store';

const getConfig = async () => {
    const logParams = await SecureStore.getItemAsync('params');
    const token = JSON.parse(logParams)?.token;

    return {
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    };
}

export default getConfig;