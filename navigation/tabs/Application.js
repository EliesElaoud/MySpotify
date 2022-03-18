import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from '../navigators/AppNavigator';
import AuthNavigator from '../navigators/AuthNavigator';

const TabApp = createStackNavigator();
const navigatorOption = {
    tabBarVisible : false,
    gestureEnabled: false
};

export default function Application (props) {
    return (
        <TabApp.Navigator
            initialRouteName={'Authentication'}
            screenOptions={{ headerShown: false }}
        >
            { props.navigatorName == 'Authentication' && <TabApp.Screen name='AuthenticationNavigator' component={AuthNavigator} options={navigatorOption}/> }
            { props.navigatorName == 'Application' && <TabApp.Screen name='ApplicationNavigator' component={AppNavigator} options={navigatorOption}/> }
        </TabApp.Navigator>
    )
}