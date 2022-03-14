import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../../styles/screens/splashscreen/Splashscreen.style';
import colors from '../../theme/colors';

class Splashscreen extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'small'} color={colors.PRIMARY_TEXT} />
            </View>
        );
    }
}

export default Splashscreen;