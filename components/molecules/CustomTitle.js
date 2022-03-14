import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/molecules/CustomTitle.style';
import { CustomText } from '../atoms';

class CustomTitle extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { title, subtitle } = this.props;

        return (
            <View style={styles.container}>
                <CustomText isBold style={styles.title}>{ title }</CustomText>
                <CustomText style={styles.subtitle}>{ subtitle }</CustomText>
            </View>
        )
    }
}

export default CustomTitle;