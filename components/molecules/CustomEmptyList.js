import React from 'react';
import { View } from 'react-native';
import translate from '../../translations/translation';
import styles from '../../styles/molecules/CustomEmptyList.style';
import { CustomIcon, CustomText } from '../atoms';
import colors from '../../theme/colors';

class CustomEmptyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <CustomIcon size={64} name='sentiment-dissatisfied' color={colors.PRIMARY_TEXT_TRANSPARENT}/>
                <CustomText style={styles.text}>{ translate('no_results') }</CustomText>
            </View>
        );
    }
}

export default CustomEmptyList;