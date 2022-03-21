import axios from 'axios';
import {getConfig, isTokenExpired} from '../utils/Config';
import { disconnect } from '../utils/User';
import _ from 'lodash';

export const getUserStatistics = async (appContext) => {

    const goDisconnect = await isTokenExpired();

    if (goDisconnect)
        disconnect(appContext);

    const config = await getConfig();

    const favGenreConfig = {
        ...config,
        params : {
            limit : 50,
            time_range : 'long_term'
        }
    }

    const userFavoriteArtistResponse = await axios.get('https://api.spotify.com/v1/me/top/artists', favGenreConfig);
    const responseItems = userFavoriteArtistResponse.data.items;

    let popularity = 0;
    _.forEach(responseItems, item => popularity += item.popularity);

    const userListeningArtistPopularity = popularity / responseItems.length;

    return {
        //userListeningTime : userListeningTimeResponse.data,
        userListeningArtistPopularity : userListeningArtistPopularity,
        userFavoriteArtist : responseItems[0].name,
        userFavoriteArtistPopularity : responseItems[0].popularity,
        userFavoriteGenre : responseItems[0].genres[0]
    };
}