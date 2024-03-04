import React from 'react';
import { View } from 'react-native';
import { CustomHeader } from '../../components/atoms';
import { ArtistsList } from '../../components/organisms';
import { getTopArtistsList } from '../../services/Artists.service';
import styles from '../../styles/screens/artists/Top.style';
import AppContext from '../../navigation/context/AppContext';
import { CustomLoader } from '../../components/molecules';

class Top extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            topArtistsList : [],
            isLoading : true
        }
    }

    async componentDidMount () {
        const topArtistsList = await getTopArtistsList(this.context);
        this.setState({ isLoading : false, topArtistsList : topArtistsList });
    }

    render () {
        const { topArtistsList, isLoading } = this.state;

        return (
            <View style={styles.container}>
                <CustomHeader />
                <ArtistsList withSpecialFirstItem isLoading={isLoading} data={topArtistsList} navigation={this.props.navigation} />
            </View>
        );
    }
}

Top.contextType = AppContext;
export default Top;