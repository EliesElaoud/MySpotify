import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import translate from '../../translations/translation';
import { CustomTitle } from '../molecules';
import styles from '../../styles/organisms/TopArtistsHeader.style';
import colors from '../../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomIcon } from '../atoms';

class TopArtistsHeader extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { title, subtitle, imageUri, onPress, withBackBtn } = this.props;

        return (
            <TouchableOpacity disabled={!onPress} onPress={() => onPress()}>
                <ImageBackground source={{ uri : imageUri }} resizeMode={'cover'} style={styles.container}>
                    <LinearGradient style={[styles.gradient, { top : 0 }]} colors={[colors.PRIMARY_BACKGROUND, 'transparent']}/>
                    
                    { !withBackBtn && <CustomTitle style={{ zIndex : 2 }} isHeader title={translate('top_artists')} titleFontSize={20} /> }
                    { withBackBtn &&
                        <View style={styles.backBtn}>
                            <CustomIcon name='arrow-back' onPress={() => this.props.navigation.goBack()} size={40} color={colors.PRIMARY_TEXT} />
                            <CustomIcon name='close' onPress={() => this.props.navigation.navigate('Top')} size={40} color={colors.PRIMARY_TEXT} />
                        </View>
                    }

                    <CustomTitle style={{ zIndex : 2 }} isSubtitleSemiBold title={title} subtitle={subtitle} titleFontSize={30} subtitleFontSize={15} />

                    <LinearGradient style={[styles.gradient, { bottom : 0 }]} colors={['transparent', colors.PRIMARY_BACKGROUND]}/>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

export default TopArtistsHeader;