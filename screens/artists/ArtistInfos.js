import React from 'react';
import { ScrollView, View, Linking } from 'react-native';
import { CustomButton, CustomListElement, CustomLoader, CustomShortInfoCard } from '../../components/molecules';
import { TopArtistsHeader } from '../../components/organisms';
import { getArtistInfos, getRelatedArtist } from '../../services/Artists.service';
import AppContext from '../../navigation/context/AppContext';
import { CustomHeader, CustomText } from '../../components/atoms';
import styles from '../../styles/screens/artists/ArtistInfos.style';
import translate from '../../translations/translation';
import { numberWithSpaces } from '../../utils/Number';
import _ from 'lodash';

class ArtistInfos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            artistInfo : null
        }
    }

    async componentDidMount() {

        const artistInfos = await getArtistInfos(this.context, this.props.route.params.artistId);
        const relatedArtists = await getRelatedArtist(this.context, this.props.route.params.artistId);

        const rank = this.props.route.params.rank;

        const formatedArtistInfos = {
            image : artistInfos.images[0].url,
            name : artistInfos.name,
            rank : rank > 0 && '#' + rank + ' ' + translate('in_your_top'),
            popularity : artistInfos.popularity + '/100',
            followers : numberWithSpaces(artistInfos.followers.total),
            genre : artistInfos.genres[0],
            relatedArtists : relatedArtists,
            href : artistInfos.uri
        };

        this.setState({ isLoading : false, artistInfos : formatedArtistInfos });
    }

    goToSpotifyArtist = () => Linking.openURL(this.state.artistInfos.href);

    renderArtistList = () => {
        const { artistInfos } = this.state;
        
        return _.map(artistInfos.relatedArtists, (el, index) =>
                <CustomListElement
                    customStyle={{marginHorizontal : 0}}
                    key={index}
                    title={el.name}
                    subtitle={numberWithSpaces(el.followers.total) + ' ' + translate('followers')}
                    imageUri={el.images[0].url}
                    onPress={() => this.props.navigation.push('ArtistInfo', { artistId : el.id, rank : 0 })}
                />
            );
    }

    render() {
        const { isLoading, artistInfos } = this.state;

        return(
            <ScrollView style={styles.container}>
                { isLoading && <CustomLoader /> }

                { !isLoading &&
                    <>
                        <CustomHeader />
                        <TopArtistsHeader navigation={this.props.navigation} withBackBtn title={artistInfos.name} subtitle={artistInfos.rank} imageUri={artistInfos.image} />

                        <View style={styles.containerInfo}>
                            <CustomShortInfoCard info={artistInfos.followers} label={translate('followers')} />
                            <CustomShortInfoCard info={artistInfos.genre} />
                            <CustomShortInfoCard info={artistInfos.popularity} label={translate('level_of_popularity')} />

                            <CustomText isSemiBold style={styles.youMightLike}>{ translate('you_might_also_like') }</CustomText>
                            { this.renderArtistList() }

                            <CustomButton iconName='spotify' iconType='material-community' text={translate('see_the_artist_on_spotify')} style={styles.btnGoToArtist} onPress={() => this.goToSpotifyArtist()} />
                        </View>
                    </>  
                }
            </ScrollView>
        );
    }
}

ArtistInfos.contextType = AppContext;
export default ArtistInfos;