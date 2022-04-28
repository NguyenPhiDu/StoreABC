import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image, Dimensions } from 'react-native';
import { getHeight } from "../../Components/GetDimensions";
import Home from '../Home';
import Products from '../Products';
import Cart from '../Cart';
import User from '../User';
import UserIcon from '../../Icons/UserIcon';
import CartIcon from '../../Icons/CartIcon';
import ProductsIcon from '../../Icons/ProductsIcon';
import HomeIcon from '../../Icons/HomeIcon';
const { height } = Dimensions.get('window')

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProductsStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

export default Navigate = () => {
    return (
        <Tab.Navigator
            barStyle={{
                // height: getHeight(height, 70),
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                //alignItems: 'center',
                paddingVertical: 10,
                backgroundColor: "white",
            }}
            tabBarBadge={1}
            activeColor="red"
            inactiveColor="#000"
            initialRouteName="HomeStack" >
            <Tab.Screen
                name="HomeStack"
                //barLabel="home"
                //component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeIcon color={color} height={25} width={25} />
                    ), tabBarLabel: "Home"
                }}>
                {() => (
                    <HomeStack.Navigator >
                        <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    </HomeStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="ProductsStack"
                //component={Products}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProductsIcon color={color} height={25} width={25} />
                    ), tabBarLabel: "Products"
                }}>
                {() => (
                    <ProductsStack.Navigator>
                        <ProductsStack.Screen name="Products" component={Products} options={{ headerShown: false }} />
                    </ProductsStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="CartStack"
                options={{
                    tabBarIcon: ({ color }) => (
                        <CartIcon color={color} height={25} width={25} />),
                    tabBarLabel: "Cart"
                }}>
                {() => (
                    <CartStack.Navigator>
                        <CartStack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                    </CartStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="UserStack"
                options={{
                    tabBarIcon: ({ color }) => (
                        <UserIcon color={color} height={25} width={25} />),
                        tabBarLabel:"Profile"
                }}>
                {() => (
                    <UserStack.Navigator initialRouteName="User">
                        <UserStack.Screen name="User" component={User} options={{ headerShown: false }} />
                    </UserStack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}