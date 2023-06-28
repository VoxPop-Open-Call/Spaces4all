import { View, TouchableWithoutFeedback, Animated } from 'react-native';
import { SideMenuBackdrop } from './styledMenuIcon';
import React, { useState, useRef } from 'react';
import SideMenu from '../SideMenu';
import 'react-native-gesture-handler';
import { Icon } from '@rneui/base';
import { color, dimensions } from '../global';

export default function SideMenuLogic() {
    const animationValue = useRef(new Animated.Value(0)).current;
    const [isActive, setIsActive] = useState(false); // Side menu open or closed
    const [isAnimating, setIsAnimating] = useState(false); // Menu animation is playing or not
    React.useEffect(() => {
        Animated.timing(animationValue, {
            toValue: Number(isActive),
            duration: 250,
            useNativeDriver: true,
        }).start(({ finished }) => {
            if (finished) {
                setIsAnimating(false)
            }
        });

    }, [isActive]);

    function handleClick() {
        setIsActive(!isActive);
        setIsAnimating(true);
    }

    const animStyle = {
        transform: [{
            translateX: animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-dimensions.width, 0],
            })
        }]
    };

    return (
        <View>
            <Icon name='menu' color={color.onPrimaryContainer} onPress={handleClick} size={24} style={{ paddingHorizontal: 8 }} />
            {(isActive || isAnimating) &&

                <View>
                    <TouchableWithoutFeedback onPress={handleClick} disabled={isAnimating}>
                        <Animated.View>
                            <SideMenuBackdrop />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <Animated.View style={[animStyle, { zIndex: 2 }]}>
                        <SideMenu action={handleClick} />
                    </Animated.View>
                </View>
            }
        </View>
    );
}

