import axios from 'axios';
import getConfig from '../utils/Config';

export const getTopArtistsList = async () => {
    const config = await getConfig();
    config.params = {
        time_range : 'short_term',
        limit : 50
    }

    const response = await axios.get('https://api.spotify.com/v1/me/top/artists', config);
    return response.data.items;
}