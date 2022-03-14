import React from 'react';
import { Icon } from 'react-native-elements';

class CustomIcon extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { name, type, color, onPress, style, size } = this.props;

        return (
            <Icon
                style={style}
                size={size}
                name={ name }
                type={ type ?? 'material' }
                color={ color }
                onPress={() => onPress()} />
        );
    }
}

export default CustomIcon;