import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigaBottom from './src/Screens/NavigaBottom'
import { StatusBar } from 'react-native';
import { Colors } from './src/Utils/Color';
import Login from './src/Screens/Login'
import SignUp from './src/Screens/SignUp'
import ForgotPass from './src/Screens/ForgotPass'
import ResetPass from './src/Screens/ResetPass'
import Order from './src/Screens/Order'
import Receipt from './src/Screens/Receipt'
import AdminCustomer from './src/Screens/AdminCustomer'
import AdminListReceipt from './src/Screens/AdminListReceipt'
import ProductDetails from './src/Screens/ProductDetails'
import AdminNotification from './src/Screens/AdminNotification'
import OrderConfirmation from './src/Screens/OrderConfirmation'
import AdminProducts from './src/Screens/AdminProducts'
import AdminEditProducts from './src/Screens/AdminEditProducts'
import AdminAddProducts from './src/Screens/AdminAddProducts'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
      //hidden={true}
      />
      <Stack.Navigator initialRouteName="NavigaBottom">
        <Stack.Screen name="NavigaBottom" component={NavigaBottom} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPass" component={ResetPass} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
        <Stack.Screen name="Receipt" component={Receipt} options={{ headerShown: false }} />
        <Stack.Screen name="AdminCustomer" component={AdminCustomer} options={{ headerShown: false }} />
        <Stack.Screen name="AdminListReceipt" component={AdminListReceipt} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
        <Stack.Screen name="AdminNotification" component={AdminNotification} options={{ headerShown: false }} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} options={{ headerShown: false }} />
        <Stack.Screen name="AdminProducts" component={AdminProducts} options={{ headerShown: false }} />
        <Stack.Screen name="AdminEditProducts" component={AdminEditProducts} options={{ headerShown: false }} />
        <Stack.Screen name="AdminAddProducts" component={AdminAddProducts} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
