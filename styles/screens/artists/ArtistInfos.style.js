import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.PRIMARY_BACKGROUND
    },

    containerInfo : {
        paddingVertical : 16,
        paddingHorizontal : 32
    },

    youMightLike : {
        fontSize : 15,
        marginTop : 16,
        color : colors.PRIMARY_TEXT_TRANSPARENT
    },

    btnGoToArtist : {
        marginVertical : 32,
        backgroundColor : colors.SECONDARY_BACKGROUND
    }
});

export default styles;