import React from "react";
import { View } from "react-native";
import { CustomHeader } from "../../components/atoms";
import { CustomTitle } from "../../components/molecules";
import translate from "../../translations/translation";
import styles from "../../styles/screens/history/History.style";

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <CustomHeader />
                <CustomTitle style={styles.title} title={translate('history')} titleFontSize={25} isHeader isTitleSemiBold />
            </View>
        );
    }
}

export default History;