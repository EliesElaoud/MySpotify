import React from "react";
import { Image, TouchableOpacity, View } from 'react-native';
import CustomTitle from "./CustomTitle";
import styles from "../../styles/molecules/CustomListElement.style";

class CustomListElement extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { title, subtitle, imageUri, onPress, customStyle } = this.props;

        return (
            <TouchableOpacity {...this.props} style={[styles.container, customStyle]} onPress={() => onPress()}>
                <Image source={{ uri : imageUri }} style={styles.image} />
                <CustomTitle isSubtitleSemiBold title={title} subtitle={subtitle} titleFontSize={20} subtitleFontSize={11} />
            </TouchableOpacity>
        );
    }
}

export default CustomListElement;