import React from 'react';
import { FlatList, Image } from 'react-native';
import styles from '../../styles/organisms/AlbumsList.style';

class AlbumsList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderListItem = (item, index) => {
        return <Image key={index} style={styles.albumImage} source={{ uri : item.item.images[0].url }} />
    } 

    render() {
        const { data } = this.props;

        return(
            <FlatList
                data={data}
                renderItem={item => this.renderListItem(item)}
                keyExtractor={(item, index) => index}
            />
        );
    }
}

export default AlbumsList;