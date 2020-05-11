import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, 
    Dimensions, ScrollView} from 'react-native';
import HeaderTitle from './HeaderTitle'
import Stories from './Stories'
import { Card, CardItem, Footer, Button, Left, Right, Body, Icon } from 'native-base';

const Main = ({navigation}) => {
        return(
            <View>
                <HeaderTitle />
                <ScrollView>
                    <View>
                    <Stories name={['Storyly', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjI4Mn0.v2jLioR32Y24eusXDEl8SW86Wc_BcMBQ8qXS3TSQruA']}/>
                        <Text style={{fontSize: 20, fontFamily: 'Nunito-Bold', color: '#000', paddingTop: 10, marginLeft: 12}}>
                            Choose a category to explore
                        </Text>
                        <Card transparent style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
                            <CardItem style={{marginBottom: 40}}>
                                <Left>
                                    <TouchableOpacity onPress={() => navigation.navigate('Ecommerce')}>
                                        <View style={{width: 120, height:120, alignItems: 'center'}} >
                                            <Image source={require('../assets/category_icons/Group35.png')} style={{height: 100, width: 100}}/>
                                            <Text style={{color: 'black', fontSize: 15, paddingTop: 10, textAlign: 'center'}}>
                                            E-Commerce
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Left>
                                <Right>
                                    <TouchableOpacity onPress={() => navigation.navigate('Electricity')}>
                                        <View style={{width: 120, height:120, alignItems: 'center'}} >
                                            <Image source={require('../assets/category_icons/Group36.png')} style={{height: 100, width: 100}}/>
                                            <Text style={{color: 'black', fontSize: 15, paddingTop: 10, textAlign: 'center'}}>
                                            Electricity Retailer
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Right>
                            </CardItem>
                            <CardItem style={{marginBottom: 40}}>
                                <Left>
                                    <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                                        <View style={{width: 120, height:120, alignItems: 'center'}}>
                                            <Image source={require('../assets/category_icons/Group37.png')} style={{height: 100, width: 100}}/>
                                            <Text style={{color: 'black', fontSize: 15, paddingTop: 10, textAlign: 'center'}}>
                                            Food and Grocery Delivery
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Left>
                                <Right>
                                    <TouchableOpacity onPress={() => navigation.navigate('Sport')}>
                                        <View style={{width: 120, height:120, alignItems: 'center'}}>
                                            <Image source={require('../assets/category_icons/Group87.png')} style={{height: 100, width: 100}}/>
                                            <Text style={{color: 'black', fontSize: 15, paddingTop: 10, textAlign: 'center'}}>
                                            Sports Schedule Apps
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Right>
                            </CardItem>
                            <CardItem style={{marginBottom: 40}}>
                                <Left>
                                    <TouchableOpacity onPress={() => navigation.navigate('Magazine')}>
                                        <View style={{ width: 120, height:120, alignItems: 'center'}}>
                                            <Image source={require('../assets/category_icons/Group88.png')} style={{height: 100, width: 100}}/>
                                            <Text style={{color: 'black', fontSize: 15, paddingTop: 10, textAlign: 'center'}}>
                                            Magazines and Newspapers 
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Left>
                                <Right>
                                    <TouchableOpacity onPress={() => navigation.navigate('InternetProviders')}>
                                        <View style={{alignItems: 'center', width: 120, height:120}}>
                                            <Image source={require('../assets/category_icons/Group89.png')} style={{height: 100, width: 100}}/>
                                            <Text style={{color: 'black', fontSize: 15, paddingTop: 10, textAlign: 'center'}}>
                                            Internet Providers 
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Right>
                            </CardItem>
                            <CardItem style={{marginBottom: 40}}>
                                <Left>
                                    <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
                                        <View style={{width: 120, height:120, alignItems: 'center'}}>
                                            <Image source={require('../assets/category_icons/Group90.png')} style={{height: 100, width: 100}}/>
                                            <Text style={{color: 'black', fontSize: 15, paddingTop: 10, textAlign: 'center'}}>
                                            Marketplace
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Left>
                            </CardItem>
                            <View style={{marginBottom: 300, marginTop: 40, alignItems: 'center'}}>
                                <Image source={require('../assets/app_icon.png')} style={{width:30, height:30}}/>
                            </View>                            
                        </Card>
                    </View> 
                </ScrollView>          
            </View>
        )
    
}

export default Main;

const styles = StyleSheet.create({  
    cards:{
      flexDirection: 'row',
    }
  })