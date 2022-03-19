import { Dimensions, StyleSheet } from "react-native";

const ALBUM_WIDTH = (Dimensions.get('window').width - 96) /2;

const styles = StyleSheet.create({
    albumImage : {
        width: ALBUM_WIDTH,
        height: ALBUM_WIDTH,
        marginBottom : 32
    }
});

export default styles;