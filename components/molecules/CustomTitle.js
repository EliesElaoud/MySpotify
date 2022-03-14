import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/molecules/CustomTitle.style';
import { CustomText } from '../atoms';

class CustomTitle extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { title, subtitle, isHeader, titleFontSize, subtitleFontSize, isSubtitleSemiBold } = this.props;

        return (
            <View {...this.props}>
                <CustomText isBold={!isHeader} style={[isHeader ? styles.headerTitle : styles.title, { fontSize : titleFontSize }]}>{ title }</CustomText>
                <CustomText isSemiBold={isSubtitleSemiBold} style={[isHeader ? styles.headerSubtitle : styles.subtitle, { fontSize : subtitleFontSize }]}>{ subtitle }</CustomText>
            </View>
        )
    }
}

export default CustomTitle;