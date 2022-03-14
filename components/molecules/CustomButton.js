import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CustomIcon, CustomText } from '../atoms';
import styles from '../../styles/molecules/CustomButton.style';
import colors from '../../theme/colors';

class CustomButton extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { text, style, onPress } = this.props;

        return (
            <TouchableOpacity style={[styles.container, style]} onPress={() => onPress()}>
                <CustomIcon name='login' color={colors.PRIMARY_TEXT} style={styles.icon} size={20} />
                <CustomText style={styles.text}>{ text }</CustomText>
            </TouchableOpacity>
        );
    }
}

export default CustomButton;