import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    title : { color : colors.SECONDARY_TEXT, fontSize : 25 },
    subtitle : { color : colors.PRIMARY_TEXT, fontSize : 12, lineHeight : 20 },

    headerTitle : { color : colors.PRIMARY_TEXT },
    headerSubtitle : { color : colors.PRIMARY_TEXT_TRANSPARENT, fontSize : 15, lineHeight : 20 }
});

export default styles;