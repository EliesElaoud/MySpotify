import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container : {
        height : 58,
        borderRadius : 8,
        alignItems : 'center',
        flexDirection : 'row',
        paddingHorizontal : 16,
        marginBottom : 16,
        backgroundColor : colors.PRIMARY_BACKGROUND_LIGHT,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    info : {
        color : colors.SECONDARY_TEXT,
        fontSize : 25
    },

    label : {
        color : colors.PRIMARY_TEXT,
        fontSize : 15
    }
});

export default styles;