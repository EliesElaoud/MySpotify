import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import * as SecureStore from 'expo-secure-store';
import { isTokenExpired } from '../utils/Config';
import AppContext from './context/AppContext';

import Splashscreen from '../screens/splashscreen/Splashscreen';
import Application from './tabs/Application';
import Authentication from './tabs/Authentication';

class Root extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            isLoading : true,
            navigator : {
                name : 'Authentication',
                lastNav: '',
                updateNavigator : this.updateNavigator.bind(this),
                getNameNavigator : this.getNameNavigator.bind(this)
            }
        }
    }

    async componentDidMount() {
        this.setState({ isLoading : true });
            
        await this.loadFonts();

        // CHECK TOKEN AND REDIRECT IF IS OK

        const isTokenExpiredValue = await isTokenExpired();

        if (!isTokenExpiredValue) {
            this.updateNavigator('Application');
        } else
            SecureStore.deleteItemAsync('params');

        // --

        this.setState({ isLoading : false });
    }

    loadFonts = async () => {
        await Font.loadAsync({
            'MontserratBold' : { uri : require('../assets/fonts/MontserratBold.ttf') },
            'MontserratMedium' : { uri : require('../assets/fonts/MontserratMedium.ttf') },
            'MontserratRegular' : { uri : require('../assets/fonts/MontserratRegular.ttf') },
            'MontserratSemiBold' : { uri : require('../assets/fonts/MontserratSemiBold.ttf') }
        });
    }

    updateNavigator = (navigator) => this.setState({ navigator : { ...this.state.navigator, name : navigator } });
    getNameNavigator = () => this.state.navigator.name;

    render () {
        const { isLoading, navigator } = this.state;

        return (
            <AppContext.Provider value={navigator} style={{ flex : 1 }}>
                <StatusBar style="auto" />
                { isLoading && <Splashscreen /> }
                { !isLoading && 
                    <NavigationContainer>
                        { navigator.name == 'Application' && <Application /> }
                        { navigator.name == 'Authentication' && <Authentication /> }
                    </NavigationContainer> 
                }
            </AppContext.Provider>
        )
    }
}

export default Root;