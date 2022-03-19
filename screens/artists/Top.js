import React from 'react';
import { View } from 'react-native';
import { CustomHeader } from '../../components/atoms';
import { ArtistsList } from '../../components/organisms';
import { getTopArtistsList } from '../../services/Artists.service';
import styles from '../../styles/screens/artists/Top.style';
import AppContext from '../../navigation/context/AppContext';

class Top extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            topArtistsList : []
        }
    }

    async componentDidMount () {
        this.setState({ isLoading : true });
        
        const topArtistsList = await getTopArtistsList(this.context);

        this.setState({ isLoading : false, topArtistsList : topArtistsList });
    }

    render () {
        const { topArtistsList } = this.state;

        return (
            <View style={styles.container}>
                <CustomHeader />
                <ArtistsList withSpecialFirstItem data={topArtistsList} />
            </View>
        );
    }
}

Top.contextType = AppContext;
export default Top;