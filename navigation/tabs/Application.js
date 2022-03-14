import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from '../navigators/AppNavigator';
import AuthNavigator from '../navigators/AuthNavigator';

const TabApp = createStackNavigator();
const navigatorOption = {
    tabBarVisible : false,
    gestureEnabled: false
};
const INITIAL_ROUTE_NAME = 'AuthenticationNavigator';

export default function Application (props) {
    return (
        <TabApp.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={{ headerShown: false }}
        >
            <TabApp.Screen name='AuthenticationNavigator' component={AuthNavigator} options={navigatorOption}/>
            <TabApp.Screen name='ApplicationNavigator' component={AppNavigator} options={navigatorOption}/>
        </TabApp.Navigator>
    )
}