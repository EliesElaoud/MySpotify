import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from '../navigators/AuthNavigator';

const TabApp = createStackNavigator();
const navigatorOption = {
    tabBarVisible : false,
    gestureEnabled: false
};

export default function Authentication (props) {
    return (
        <TabApp.Navigator
            initialRouteName='AuthenticationNavigator'
            screenOptions={{ headerShown: false }}
        >
            <TabApp.Screen name='AuthenticationNavigator' component={AuthNavigator} options={navigatorOption}/>
        </TabApp.Navigator>
    )
}