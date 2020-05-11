import 'react-native-gesture-handler';
import React, {Component, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main'
import Ecommerce from './components/Categories/Ecommerce'
import Food from './components/Categories/Food'
import InternetProviders from './components/Categories/InternetProviders'
import Magazine from './components/Categories/Magazine'
import Marketplace from './components/Categories/Marketplace'
import ServiceProviders from './components/Categories/ServiceProviders'
import Sport from './components/Categories/Sport'
import EcommerceSecondPage from './components/Categories/EcommerceSecondPage'
import Electricity from './components/Categories/Electricity'
import SplashScreen from 'react-native-splash-screen'
import ElectricitySecondPage from './components/Categories/ElectricitySecondPage'
import FoodSecondPage from './components/Categories/FoodSecondPage'
import SportSecondPage from './components/Categories/SportSecondPage'
import MagazineSecondPage from './components/Categories/MagazineSecondPage'
import InternetProviderSecondPage from './components/Categories/InternetProviderSecondPage'
import MarketplaceSecondPage from './components/Categories/MarketplaceSecondPage'

const Stack = createStackNavigator();
const Home = () =>  {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#fff'}}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Ecommerce" component={Ecommerce} />
          <Stack.Screen name="Food" component={Food} />
          <Stack.Screen name="InternetProviders" component={InternetProviders} />
          <Stack.Screen name="Magazine" component={Magazine} />
          <Stack.Screen name="Marketplace" component={Marketplace} />
          <Stack.Screen name="ServiceProviders" component={ServiceProviders} />
          <Stack.Screen name="Sport" component={Sport} />
          <Stack.Screen name="EcommerceSecondPage" component={EcommerceSecondPage} />
          <Stack.Screen name="Electricity" component={Electricity} />
          <Stack.Screen name="ElectricitySecondPage" component={ElectricitySecondPage} />
          <Stack.Screen name="FoodSecondPage" component={FoodSecondPage} />
          <Stack.Screen name="SportSecondPage" component={SportSecondPage} />
          <Stack.Screen name="MagazineSecondPage" component={MagazineSecondPage} />
          <Stack.Screen name="InternetProviderSecondPage" component={InternetProviderSecondPage} />
          <Stack.Screen name="MarketplaceSecondPage" component={MarketplaceSecondPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Home;

