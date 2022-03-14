import React from 'react';
import { FlatList } from 'react-native';
import translate from '../../translations/translation';
import { CustomListElement } from '../molecules';
import TopArtistsHeader from './TopArtistsHeader';

class ArtistsList extends React.Component {
    constructor (props) {
        super (props);
    }

    renderListItem = ({ item, index }) => {
        const { withSpecialFirstItem } = this.props;

        const artistName = '#' + (index+1) + ' ' + item.name;
        const popularity = translate('popularity') + item.popularity + '/100';

        if (index == 0 && withSpecialFirstItem)
            return (<TopArtistsHeader onPress={() => alert()} key={index} title={artistName} subtitle={popularity} imageUri={item.images[0].url} />);
        else
            return (<CustomListElement onPress={() => alert()} key={index} title={artistName} subtitle={popularity} imageUri={item.images[0].url} />)
    }

    render () {
        const { data } = this.props;

        return (
            <FlatList
                contentContainerStyle={{ paddingBottom : 32 }}
                data={data}
                renderItem={this.renderListItem}
                keyExtractor={(item, index) => index}
            />
        );
    }
}

export default ArtistsList;