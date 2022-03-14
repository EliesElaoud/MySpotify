import {TransitionPresets} from '@react-navigation/stack';

const navigation = {
    defaultOptions : () => {
        return {
            ...TransitionPresets.SlideFromRightIOS,
            headerShown : false
        }
    }
};

export default navigation;