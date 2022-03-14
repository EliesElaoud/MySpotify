import React from 'react';
import { Text } from 'react-native';

class CustomText extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            fontRegular : null,
            fontBold : null
        }
    }

    componentDidMount () {
        const { isSemiBold } = this.props;
        this.setState({ font : isSemiBold ? 'MontserratSemiBold' : 'MontserratMedium' });
    }

    render () {
        const { children, style, isBold } = this.props;
        const { font } = this.state;

        return (
            <Text {...this.props} style={[
                style,
                { fontFamily : isBold ? 'MontserratBold' : font }
            ]}>{ children }</Text>
        );
    }
}

export default CustomText;