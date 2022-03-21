import { StyleSheet } from "react-native";
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.PRIMARY_BACKGROUND_LIGHT,
        borderRadius : 8,
        padding : 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    label : {
        color : colors.PRIMARY_TEXT,
        opacity : 0.3,
        fontSize : 15,
        marginBottom : 8
    },
    
    title : {
        color : colors.SECONDARY_TEXT,
        fontSize : 25
    },

    infos : {
        color : colors.PRIMARY_TEXT,
        fontSize : 12,
        lineHeight : 20
    }
});

export default styles;