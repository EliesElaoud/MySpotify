import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import translate from '../../translations/translation';
import { CustomTitle } from '../molecules';
import styles from '../../styles/organisms/TopArtistsHeader.style';
import colors from '../../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';

class TopArtistsHeader extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { title, subtitle, imageUri, onPress } = this.props;

        return (
            <TouchableOpacity onPress={() => onPress()}>
                <ImageBackground source={{ uri : imageUri }} resizeMode={'cover'} style={styles.container}>
                    <LinearGradient style={[styles.gradient, { top : 0 }]} colors={[colors.PRIMARY_BACKGROUND, 'transparent']}/>
                    
                    <CustomTitle style={{ zIndex : 2 }} isHeader title={translate('top_artists')} titleFontSize={20} />
                    <CustomTitle style={{ zIndex : 2 }} isSubtitleSemiBold title={title} subtitle={subtitle} titleFontSize={30} subtitleFontSize={15} />

                    <LinearGradient style={[styles.gradient, { bottom : 0 }]} colors={['transparent', colors.PRIMARY_BACKGROUND]}/>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

export default TopArtistsHeader;