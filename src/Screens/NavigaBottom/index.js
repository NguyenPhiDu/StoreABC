import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Home';
import Products from '../Products';
import Cart from '../Cart';
import User from '../User';
import EditProfile from '../EditProfile';
import NotifiCation from '../NotifiCation';
import HistoryProducts from '../HistoryProducts';
import UserIcon from '../../Icons/UserIcon';
import CartIcon from '../../Icons/CartIcon';
import ProductsIcon from '../../Icons/ProductsIcon';
import HomeIcon from '../../Icons/HomeIcon';
import { Colors } from '../../Utils/Color';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProductsStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

export default Navigate = () => {
    return (
        <Tab.Navigator
            barStyle={{
                // borderTopLeftRadius: 15,
                // borderTopRightRadius: 15,
                paddingVertical: 7,
                //borderTopColor: Colors.gray,
                backgroundColor: Colors.whiteblue,
            }}
            //tabBarBadge={1}
            activeColor={Colors.orange}
            inactiveColor={Colors.black}
            initialRouteName="HomeStack" >
            <Tab.Screen
                name="HomeStack"
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
                    tabBarLabel: "Profile"
                }}>
                {() => (
                    <UserStack.Navigator initialRouteName="User">
                        <UserStack.Screen name="User" component={User} options={{ headerShown: false }} />
                        <UserStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
                        <UserStack.Screen name="NotifiCation" component={NotifiCation} options={{ headerShown: false }} />
                        <UserStack.Screen name="HistoryProducts" component={HistoryProducts} options={{ headerShown: false }} />
                    </UserStack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}