import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Header, Left, Right} from 'native-base'
import Stories from '../Stories'
import HeaderTitle from '../HeaderTitle'
import picture from '../../assets/e_commerce/e_commerce_ui.png';  
const {width, height} = Image.resolveAssetSource(picture);
import 'react-native-gesture-handler';


const EcommerceSecondPage = ({navigation}) => {
    return (
        <View>

            <View style={{backgroundColor: '#4B3399'}}>
                <Header noShadow  transparent style={{margin: 10}}>
                    <Left style={{flex:1}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                            <Image source={require('../../assets/back_button.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Image source={require('../../assets/storyly_light_logo.png')} style={{flex:1,width: '100%',height:50,alignContent:'center', resizeMode:'contain'}}/>
                    <Right />
                </Header>
            </View>
            <View style={{width: '100%', marginBottom: 200}}>
                <Image source={require('../../assets/food_and_grocery_delivery/food_and_grocery_delivery_cta.png')}  style={{ width: '100%',height: 800,resizeMode: 'contain'}} />
            </View>
        </View>
    )
    
}
export default EcommerceSecondPage;