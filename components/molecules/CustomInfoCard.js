import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/molecules/CustomInfoCard.style';
import { CustomText } from '../atoms';

class CustomInfoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { label, title, infos } = this.props;

        return(
            <View style={styles.container}>
                <CustomText isSemiBold style={styles.label}>{ label }</CustomText>
                <CustomText isBold style={styles.title}>{ title }</CustomText>
                <CustomText style={styles.infos}>{ infos }</CustomText>
            </View>
        );
    }
}

export default CustomInfoCard;