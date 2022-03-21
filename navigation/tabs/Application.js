import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from '../navigators/AppNavigator';

import ArtistInfos from '../../screens/artists/ArtistInfos';

const TabApp = createStackNavigator();
const navigatorOption = {
    tabBarVisible : false,
    gestureEnabled: false
};
const screenOption = {
    tabBarVisible : false
}

export default function Application (props) {
    return (
        <TabApp.Navigator
            initialRouteName='ApplicationNavigator'
            screenOptions={{ headerShown: false }}
        >
            <TabApp.Screen name='ApplicationNavigator' component={AppNavigator} options={navigatorOption}/>
            
            <TabApp.Screen name='ArtistInfo' component={ArtistInfos} options={screenOption}/>
        </TabApp.Navigator>
    )
}