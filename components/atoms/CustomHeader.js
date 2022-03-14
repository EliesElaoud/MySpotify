import React from 'react';
import { View, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT

class CustomHeader extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <View style={{ height : STATUSBAR_HEIGHT }}></View>
        );
    }
}

export default CustomHeader;