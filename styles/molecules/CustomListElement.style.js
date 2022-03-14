import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container : {
        marginTop : 16,
        marginHorizontal : 32,
        borderRadius : 8,
        padding: 8,
        flexDirection : 'row',
        alignItems : 'center',
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

    image : {
        width : 64,
        height : 64,
        marginRight : 16,
        borderRadius : 8
    }
});

export default styles;