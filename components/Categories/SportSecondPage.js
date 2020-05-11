import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Header, Left, Right} from 'native-base'
import Stories from '../Stories'
import HeaderTitle from '../HeaderTitle'
import picture from '../../assets/e_commerce/e_commerce_ui.png';  
const {width, height} = Image.resolveAssetSource(picture);
import 'react-native-gesture-handler';


const EcommerceSecondPage = ({navigation}) => {
    const dimensions = Dimensions.get('window');
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
        <View>

            <View style={{backgroundColor: '#339974'}}>
                <Header noShadow  transparent style={{margin: 10}}>
                    <Left style={{flex:1}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Sport')}>
                            <Image source={require('../../assets/back_button.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Image source={require('../../assets/storyly_light_logo.png')} style={{flex:1,width: '100%',height:50,alignContent:'center', resizeMode:'contain'}}/>
                    <Right />
                </Header>
            </View>
            <ScrollView>

            <View style={{height:1000}}>
                <Image source={require('../../assets/sports_schedule/sports_schedule_cta.png')} 
                    style={{ width: screenWidth,height:screenHeight, resizeMode: 'cover'}} />
            </View>
            </ScrollView>
        </View>
    )
    
}
export default EcommerceSecondPage;