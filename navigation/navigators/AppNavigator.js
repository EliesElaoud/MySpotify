import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { TopScreen } from '../screens/ArtistsScreen';

const App = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Top';

export default function AuthNavigator() {
    return (
        <App.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            { /* ARTISTS */ }
            <App.Screen options={TopScreen.navigationOptions} name={'Top'} component={TopScreen.screen} />
        </App.Navigator>
    );
}