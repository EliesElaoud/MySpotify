import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
    container : { justifyContent: 'center', flex: 1, paddingHorizontal: 32, backgroundColor: colors.PRIMARY_BACKGROUND },
    btnLogin : { marginTop: 16, backgroundColor : colors.SECONDARY_BACKGROUND }
});

export default styles;