import React from 'react';
import { View } from 'react-native';
import { CustomTitle, CustomButton } from '../../components/molecules';
import styles from '../../styles/screens/authentication/Authentication.style';
import translate from '../../translations/translation';
import secrets from '../../utils/Secret';
import axios from 'react-native-axios';
import * as AuthSession from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import AppContext from '../../navigation/context/AppContext';

const USE_PROXY = true;
const SCOPES_ARR = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                   'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                   'playlist-modify-private','user-read-recently-played','user-top-read'];
const SCOPES = SCOPES_ARR.join(' ');

class Authentication extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        };
    }

    handleSpotifyLogin = async () => {
        const redirectUrl = AuthSession.makeRedirectUri({
            native: secrets.redirectUri,
            USE_PROXY
        });

        const results = await AuthSession.startAsync({
          authUrl:
          'https://accounts.spotify.com/authorize?client_id=' + secrets.clientId +
          '&redirect_uri=' + encodeURIComponent(redirectUrl) +
          '&scope=' + encodeURIComponent(SCOPES) + '&response_type=token'
        });
        
        if (results.type !== 'success') {
            this.setState({ ...this.state, didError: true })
        } else {
            const userInfo = await axios.get(`https://api.spotify.com/v1/me`, {
                headers: {
                "Authorization": `Bearer ${results.params.access_token}`
                }
            });
            this.setState({ ...this.state, userInfo: userInfo.data })

            const params = {
                token : results.params.access_token,
                datetime : Date.now(),
                expires_in : results.params.expires_in
            }

            await SecureStore.setItemAsync('params', JSON.stringify(params));
            this.context.updateNavigator('Application');
        }
    }

    render () {
        return (
            <View style={ styles.container }>
                <CustomTitle title={translate('title')} subtitle={translate('connect_spotify')} titleFontSize={25} subtitleFontSize={12} />
                <CustomButton iconName='login' text={translate('connexion')} style={styles.btnLogin} onPress={() => this.handleSpotifyLogin()} />
            </View>
        )
    }
}

Authentication.contextType = AppContext;
export default Authentication;