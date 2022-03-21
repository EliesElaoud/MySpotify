import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../atoms';
import styles from '../../styles/molecules/CustomShortInfoCard.style';

class CustomShortInfoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { info, label } = this.props;

        return(
            <View style={styles.container}>
                <CustomText isBold style={styles.info}>{info} </CustomText>
                <CustomText style={styles.label}>{label}</CustomText>
            </View>
        );
    }
}

export default CustomShortInfoCard;