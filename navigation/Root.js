import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StatusBar } from 'react-native';
import * as Font from 'expo-font';

import Splashscreen from '../screens/splashscreen/Splashscreen';
import Application from './tabs/Application';

class Root extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            isLoading : true,
            navigatorName : 'application'
        }
    }

    async componentDidMount() {
        this.setState({ isLoading : true });

        await this.loadFonts();

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

    render () {
        const { isLoading, navigatorName } = this.state;

        return (
            <View style={{ flex : 1 }}>
                <StatusBar style="auto" />
                { isLoading && <Splashscreen /> }
                { !isLoading && 
                    <NavigationContainer>
                        { navigatorName == 'application' && <Application /> }
                    </NavigationContainer> 
                }
            </View>
        )
    }
}

export default Root;