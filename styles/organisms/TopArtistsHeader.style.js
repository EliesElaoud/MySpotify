import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        height: 300,
        paddingTop : 16,
        paddingHorizontal : 16,
        justifyContent : 'space-between',
        paddingBottom : 32
    },

    gradient : {
        height : 80,
        zIndex : 1,
        position : 'absolute',
        right : 0, left: 0
    }
});

export default styles;