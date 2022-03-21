import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/screens/stats/Stats.style';
import translate from '../../translations/translation';
import AppContext from '../../navigation/context/AppContext';
import _ from 'lodash';
import { getUserStatistics } from '../../services/Statistics.service';
import { CustomHeader } from '../../components/atoms';
import { CustomTitle } from '../../components/molecules';
import { StatisticsList } from '../../components/organisms';

class Stats extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            statistics : [],
            isLoading : true
        }
    }

    async componentDidMount() {
        const userStatistics = await getUserStatistics(this.context);

        const formatedStatistics = [
            this.formatInformations('Artiste favoris', userStatistics.userFavoriteArtist, 'Popularité de ' + userStatistics.userFavoriteArtistPopularity + '/100')
        ];

        this.setState({ isLoading : false, statistics : formatedStatistics });
    }

    formatInformations = (label, title, infos) => ({ label : label, title : title, infos : infos });

    render() {
        const { statistics, isLoading } = this.state;

        return(
            <View style={styles.container}>
                <CustomHeader />
                <CustomTitle style={styles.title} title={translate('statistics')} titleFontSize={25} isHeader isTitleSemiBold />

                <StatisticsList isLoading={isLoading} data={statistics} />
            </View>
        );
    }
}

Stats.contextType = AppContext;
export default Stats;