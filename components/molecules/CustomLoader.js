import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from '../../styles/molecules/CustomLoader';

class CustomLoader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <ActivityIndicator size='small' />
            </View>
        );
    }
}

export default CustomLoader;