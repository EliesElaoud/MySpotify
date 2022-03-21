import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        marginTop : 16,
        fontSize : 16,
        color : colors.PRIMARY_TEXT_TRANSPARENT
    }
});

export default styles;