import React from 'react';
import { Icon } from 'react-native-elements';
import styles from '../../styles/atoms/CustomIcon.style';

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
                disabled={onPress == null}
                disabledStyle={styles.disabledStyle}
                onPress={() => onPress && onPress()} />
        );
    }
}

export default CustomIcon;