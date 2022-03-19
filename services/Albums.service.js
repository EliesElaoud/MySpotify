import axios from 'axios';
import {getConfig, isTokenExpired} from '../utils/Config';
import { disconnect } from '../utils/User';

export const getSubscriptionsList = async () => {

    const goDisconnect = await isTokenExpired();

    if (goDisconnect)
        disconnect();

    const config = await getConfig();
    config.params = {
        limit : 50
    }

    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', config);
    return response.data;
}