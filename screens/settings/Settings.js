import React from 'react';
import { View } from 'react-native';
import { CustomHeader, CustomText } from '../../components/atoms';
import { CustomButton, CustomTitle } from '../../components/molecules';
import translate from '../../translations/translation';
import styles from '../../styles/screens/settings/Settings.style';
import app from '../../app.json';
import AppContext from '../../navigation/context/AppContext';
import { disconnect } from '../../utils/User';

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerActionButtons}>
                    <CustomHeader />
                    <CustomTitle style={styles.title} title={translate('settings')} titleFontSize={25} isHeader isTitleSemiBold />
                
                    <CustomButton iconName='logout' text={translate('logout')} style={styles.btnLogout} onPress={() => disconnect(this.context)} />
                </View>

                <View style={styles.containerInformations}>
                    <CustomText style={styles.version}>{translate('version')} {app.expo.version}</CustomText>
                </View>
            </View>
        );
    }
}

Settings.contextType = AppContext;
export default Settings;