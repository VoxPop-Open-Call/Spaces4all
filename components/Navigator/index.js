import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationScreen from "../LocationScreen";
import { color } from '../../global';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Icon, Text } from '@rneui/base/dist';
import SideMenu from '../SideMenu';
import HomeScreen from '../HomeScreen';
import TrackScreen from '../TrackScreen';
import TrackEndScreen from '../TrackEndScreen';
import { localeTexts } from '../../global';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Test({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        </View>
    );
}


function SideNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                color: color.onBackground,
                swipeEdgeWidth: 300,
                headerStyle: { backgroundColor: color.primaryContainer },
                headerTitleStyle: { color: color.onPrimaryContainer }
            }}
            drawerContent={
                (props) =>
                    <SideMenu {...props} />
            }
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: () => <Icon name="home" type="MaterialIcons" color={color.onBackground} />,
                    title: localeTexts['home'],

                }}

            />
            {/* <Drawer.Screen
                name="Config"
                component={Test}
                options={{
                    drawerIcon: () => <Icon name="settings" type="Feather" color={color.onBackground} />,
                    title: localeTexts["settings"]
                }}
                
            />
            <Drawer.Screen
                name="Feedback"
                component={Test}
                options={{
                    drawerIcon: () => <Icon name="feedback" type="MaterialIcons" color={color.onBackground} />,
                    title: localeTexts['feedback']
                }}
            /> */}

        </Drawer.Navigator>
    );
}

function StackNavigator() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                color: color.onBackground,
                swipeEdgeWidth: 300,
                headerStyle: { backgroundColor: color.primaryContainer },
                headerTitleStyle: { color: color.onPrimaryContainer }
            }}>
                <Stack.Screen
                    name='SideNavigator'
                    component={SideNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Location"
                    component={LocationScreen}
                    options={{
                        title: localeTexts["location"]
                    }}
                />
                <Stack.Screen
                    name="Track"
                    component={TrackScreen}
                    options={{
                        title: localeTexts['track'],
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="TrackEndScreen"
                    component={TrackEndScreen}
                    options={{
                        title: "",
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { StackNavigator, SideNavigator }