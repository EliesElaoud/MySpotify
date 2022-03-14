import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container : {
        height : 52,
        paddingHorizontal : 16,
        alignItems : 'center',
        flexDirection : 'row',
        borderRadius : 8,
        backgroundColor : colors.SECONDARY_BACKGROUND
    },

    icon : {
        marginRight : 16
    },

    text : {
        fontSize : 15,
        color : colors.PRIMARY_TEXT
    }
});

export default styles;