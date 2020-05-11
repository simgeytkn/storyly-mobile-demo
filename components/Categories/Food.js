import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Header, Left, Right} from 'native-base'
import Stories from '../Stories'
import HeaderTitle from '../HeaderTitle'
import picture from '../../assets/e_commerce/e_commerce_ui.png';  
const {width, height} = Image.resolveAssetSource(picture);
import 'react-native-gesture-handler';
import { Storyly } from 'storyly-react-native';


const Ecommerce = ({navigation}) => {
    const dimensions = Dimensions.get('window');
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
        <View>
            <View style={{backgroundColor: '#4B3399'}}>
            <Header noShadow  transparent style={{margin: 15}}>
                <Left style={{flex:1}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <Image source={require('../../assets/back_button.png')} />
                    </TouchableOpacity>
                </Left>
                    <Image source={require('../../assets/storyly_light_logo.png')} style={{flex:1,width: '100%',height:'100%',alignContent:'center', resizeMode:'contain'}}/>
                <Right >
                    <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                        <Image source={require('../../assets/refresh_button.png')} />
                    </TouchableOpacity>
                </Right>
            </Header>
            </View>
            <ScrollView>
                <View style={{width: '100%', marginBottom: 200}}>
                    <View style={styles.stories}>
                        <Text style={{fontSize: 20, paddingTop: 20,fontWeight:'400', fontFamily: 'Nunito-ExtraBold',
                                    color: '#000'}}>
                            Welcome To Food and Grocery Delivery
                        </Text>

                        <Storyly
                            style={{ width: '100%', height: 120, marginTop: 15 }}
                            storylyId= {'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjI5NH0.GokxRiAUSbgdH7ppld0LwK89YI6760WQ9RMyaHsonJw'}
                            onLoad={storyGroupList => {}}
                            onFail={errorMessage => {}}
                            onPress={story => {}}
                            onStoryOpen={() => {}}
                            onStoryClose={() => {}}
                            storyGroupIconBorderColorNotSeen={['#FFCE3D', '#FFCE3D']}
                        />
                    </View>
                    <TouchableOpacity style={{width: screenWidth, height: screenHeight + screenWidth/1.5}} onPress={() => {navigation.navigate('FoodSecondPage')}}>
                        <Image source={require('../../assets/food_and_grocery_delivery/food_and_grocery_delivery_ui.png')}  style={{ width: '100%',height: '100%', resizeMode: 'cover'}} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
    
}

const styles = StyleSheet.create({
    stories: {
        height: 170,
        marginLeft: 12,
    }
  })
export default Ecommerce;