import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 32,
        backgroundColor : colors.PRIMARY_BACKGROUND
    },

    containerActionButtons : {
        flex : 1
    },

    containerInformations : {
        paddingVertical : 16
    },
    
    title : {
        marginTop : 32,
        marginBottom : 16
    },

    btnLogout : {
        backgroundColor : colors.DANGER
    },

    version : {
        fontSize : 14,
        color : colors.THIRD_TEXT
    }
});

export default styles;