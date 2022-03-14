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

    render () {
        const { children, style, isBold } = this.props;

        return (
            <Text {...this.props} style={[ style, { fontFamily : isBold ? 'MontserratBold' : 'MontserratMedium' }]}>{ children }</Text>
        );
    }
}

export default CustomText;