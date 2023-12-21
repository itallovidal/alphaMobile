import React from 'react';
import {ActivityIndicator} from "react-native";
import Animated, {FadeIn} from "react-native-reanimated";

export const AnimatedLoading = Animated.createAnimatedComponent(ActivityIndicator)

function Loading() {
    return (
        <AnimatedLoading
            style={{marginTop: 24, flex: 1}}
            size={56}
            color={'#ffffff'}

            entering={FadeIn.duration(1000)}
        />
    );
}

export default Loading;