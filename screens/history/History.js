import React from "react";
import { View } from "react-native";
import { CustomHeader } from "../../components/atoms";
import { CustomLoader, CustomTitle } from "../../components/molecules";
import translate from "../../translations/translation";
import styles from "../../styles/screens/history/History.style";
import { SongsList } from "../../components/organisms";
import { getHistory } from '../../services/History.service';
import AppContext from '../../navigation/context/AppContext';
import _ from 'lodash';

class History extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true
        }
    }

    async componentDidMount() {
        const history = await getHistory(this.context);
        const formatedHistoryList = _.map(history, el => ({ id : el.track.id, name : el.track.name, artistName : el.track.artists[0].name, uri : el.track.uri, image : el.track.album.images[0].url }));

        this.setState({ isLoading : false, historyList : formatedHistoryList });
    }

    render() {
        const { isLoading, historyList } = this.state;

        return(
            <View style={styles.container}>
                <CustomHeader />
                <CustomTitle style={styles.title} title={translate('history')} titleFontSize={25} isHeader isTitleSemiBold />

                { isLoading && <CustomLoader /> }
                { !isLoading && <SongsList data={historyList} /> }
            </View>
        );
    }
}

History.contextType = AppContext;
export default History;