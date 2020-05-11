import React, { Component } from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Left, Right } from 'native-base';

const CenterTitle = () => {
  return(
    <Image source={require('../assets/'+'storyly_dark_logo.png')} style={{width: 200,height:50, resizeMode:'contain'}}/>
  )
}

const HeaderTitle = (props) => {
  console.log(props)
  return(
    <View>
      <Header noShadow  transparent style={{backgroundColor: props.name, margin: 25}}>
        <Left style={{flex:1}} />
        <CenterTitle style={{flex:1}} />
        <Right />
      </Header>
    </View>
  )
}


export default HeaderTitle;
