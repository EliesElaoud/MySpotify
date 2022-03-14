import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { AuthenticationScreen } from '../screens/AuthenticationScreen';

const App = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Authentication';

export default function AuthNavigator() {
    return (
        <App.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            { /* LOGIN */ }
            <App.Screen options={AuthenticationScreen.navigationOptions} name={'Authentication'} component={AuthenticationScreen.screen} />
        </App.Navigator>
    );
}