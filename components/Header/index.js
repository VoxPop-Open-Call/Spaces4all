import { Header, Icon, Text } from '@rneui/base';
import React, { useState, useRef } from 'react';
import { TouchableWithoutFeedback, View, Animated } from 'react-native';
import { color, dimensions } from '../global';
import { Title, SideMenuBackdrop } from './styledHeader.js';
import SideMenu from '../SideMenu';


export default function MainHeader(props) {

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

    const xVal = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-dimensions.width, 0],
    });

    const animStyle = {
        transform: [{ translateX: xVal }]
    };
    // TODO: Set side menu as a new component
    return (
        <View >
            {(isActive || isAnimating) &&
                <View>
                    <TouchableWithoutFeedback onPress={handleClick} disabled={isAnimating}>
                        <Animated.View style={{ opacity: animationValue, zIndex: 1 }}>
                            <SideMenuBackdrop />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <Animated.View style={[animStyle, { zIndex: 2 }]}>
                        <SideMenu action={handleClick} />
                    </Animated.View>
                </View>
            }

            <Header
                backgroundColor={color.primaryContainer}
                containerStyle={{ paddingTop: 16 }} //Status bar
                leftComponent={<Icon name='menu' color={color.onPrimaryContainer} size={30} onPress={handleClick} style={{ paddingHorizontal: 16 }} />}
                centerComponent={< Title >{props.pageTitle}</Title >}
                placement="left"
                elevated
            />

        </View >
    )
}



