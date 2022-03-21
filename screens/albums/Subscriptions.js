import React from 'react';
import { View } from 'react-native';
import { CustomHeader } from '../../components/atoms';
import { CustomTitle } from '../../components/molecules';
import styles from '../../styles/screens/albums/Subscriptions.style';
import translate from '../../translations/translation';
import { getSubscriptionsList } from '../../services/Albums.service';
import { AlbumsList } from '../../components/organisms';

class Subscriptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subscriptionsList : []
        }
    }

    async componentDidMount() {
        this.setState({ isLoading : true });

        const subscriptionsList = await getSubscriptionsList();

        this.setState({ subscriptionsList : subscriptionsList?.albums.items, isLoading : false });
    }

    render() {
        const { subscriptionsList } = this.state;

        return(
            <View style={styles.container}>
                <CustomHeader />
                <CustomTitle style={styles.title} title={translate('subscriptions')} titleFontSize={25} isHeader isTitleSemiBold />

                <AlbumsList
                    data={subscriptionsList}
                />
            </View>
        );
    }
}

export default Subscriptions;