import React from 'react';
import { FlatList } from 'react-native';
import translate from '../../translations/translation';
import { CustomListElement, CustomLoader } from '../molecules';
import CustomEmptyList from '../molecules/CustomEmptyList';
import TopArtistsHeader from './TopArtistsHeader';

class ArtistsList extends React.Component {
    constructor (props) {
        super (props);
    }

    goToArtist = (artistId, rank) => {
        this.props.navigation.navigate('ArtistInfo', { artistId : artistId, rank : rank });
    }

    renderListItem = ({ item, index }) => {
        const { withSpecialFirstItem } = this.props;

        const artistName = '#' + (index+1) + ' ' + item.name;
        const popularity = translate('popularity') + item.popularity + '/100';

        if (index == 0 && withSpecialFirstItem)
            return (<TopArtistsHeader onPress={() => this.goToArtist(item.id, index+1)} key={index} title={artistName} subtitle={popularity} imageUri={item.images[0].url} />);
        else
            return (<CustomListElement onPress={() => this.goToArtist(item.id, index+1)} key={index} title={artistName} subtitle={popularity} imageUri={item.images[0].url} />)
    }

    render () {
        const { data, isLoading } = this.props;

        return (
            <>
                {
                    isLoading ?
                        <CustomLoader />
                    :
                    <FlatList
                        contentContainerStyle={{ paddingBottom : 32, flexGrow : 1 }}
                        data={data}
                        renderItem={this.renderListItem}
                        keyExtractor={(item, index) => index}
                        ListEmptyComponent={<CustomEmptyList />}
                    />
                }
            </>
        );
    }
}

export default ArtistsList;