import axios from 'axios';
import {getConfig, isTokenExpired} from '../utils/Config';
import { disconnect } from '../utils/User';

export const getTopArtistsList = async (appContext) => {

    const goDisconnect = await isTokenExpired();

    if (goDisconnect)
        disconnect(appContext);

    const config = await getConfig();
    config.params = {
        time_range : 'short_term',
        limit : 50
    }

    const response = await axios.get('https://api.spotify.com/v1/me/top/artists', config);
    return response.data.items;
}