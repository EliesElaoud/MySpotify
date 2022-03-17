import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { CustomIcon } from '../../components/atoms';
import colors from '../../theme/colors';
import BottomTabBarStyle from '../../styles/others/BottomTabBar.style';

import { TopScreen } from '../screens/ArtistsScreen';
import { StatsScreen } from '../screens/StatsScreen';
import { SubscriptionsScreen } from '../screens/AlbumsScreen';

const App = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Top';

const getBottomTabIcon = (route, focused) => {
    let iconName;
    const iconColor = focused ? colors.SECONDARY_TEXT : colors.PRIMARY_TEXT;

    switch (route.name) {
        case 'Top':
            iconName = 'emoji-events';
            break;
        case 'Subscriptions':
            iconName = 'subscriptions';
            break;
        case 'Stats':
            iconName = 'insert-chart';
            break;
    }

    return <CustomIcon name={iconName} color={iconColor} size={30} />
}

export default function AuthNavigator() {
    return (
        <App.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => getBottomTabIcon(route, focused),
                tabBarStyle: BottomTabBarStyle,
                tabBarShowLabel: false
            })}
        >
            <App.Screen options={TopScreen.navigationOptions} name={'Top'} component={TopScreen.screen} />
            <App.Screen options={SubscriptionsScreen.navigationOptions} name={'Subscriptions'} component={SubscriptionsScreen.screen} />
            <App.Screen options={StatsScreen.navigationOptions} name={'Stats'} component={StatsScreen.screen} />
        </App.Navigator>
    );
}