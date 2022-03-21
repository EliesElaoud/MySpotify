import React from 'react';
import { FlatList, Linking } from 'react-native';
import { CustomListElement } from '../molecules';
import CustomEmptyList from '../molecules/CustomEmptyList';

class SongsList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem = ({item, index}) => {
        let name = item.name;

        if (name.length > 15) {
            name = name.slice(0,15);
            name += '...';
        }

        return <CustomListElement onPress={() => Linking.openURL(item.uri)} customStyle={{ marginHorizontal : 0 }} title={name} subtitle={item.artistName} imageUri={item.image} />
    }

    render() {
        const { data } = this.props;

        return(
            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={<CustomEmptyList />}
                contentContainerStyle={{ paddingBottom : 32, flexGrow : 1 }}
            />
        );
    }
}

export default SongsList;