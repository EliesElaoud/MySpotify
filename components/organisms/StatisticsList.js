import React from 'react';
import { FlatList } from 'react-native';
import { CustomInfoCard, CustomLoader } from '../molecules';

class StatisticsList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderListElement = ({item, index}) => {
        return (<CustomInfoCard key={index} label={item.label} title={item.title} infos={item.infos} />);
    }

    render() {
        const { data, isLoading } = this.props;

        return(
            <>
            {
                isLoading ?
                    <CustomLoader />
                :
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index}
                        renderItem={ this.renderListElement }
                    />
            }
            </>
        );
    }
}

export default StatisticsList;