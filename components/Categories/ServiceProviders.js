import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Stories from '../Stories'
import HeaderTitle from '../HeaderTitle'

const ServiceProvider = (props) => {
    return (
        <View>
            <HeaderTitle />
            <Stories name={['Service Provider']}/>
            <View style={{height: 350}}>
                <ScrollView>
                    <View style={{padding: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Image resizeMode='contain' style={{width:180, height:180}} source={{uri: 'https://storyly.io/wp-content/uploads/2020/04/heroimg.png'}} />
                            <Image resizeMode='contain' style={{width:180, height:180}} source={{uri: 'https://storyly.io/wp-content/uploads/2020/04/heroimg.png'}} />
                        </View>
                        <Text style={{marginTop: 10, fontFamily: 'Nunito-Bold', color:'#1e2a78'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{marginTop:50, alignItems: 'center', justifyContent:'flex-end'}}>   
                <TouchableOpacity style={{backgroundColor:'#1e2a78', borderRadius: 5}}>
                    <Text style={{paddingTop: 7, paddingBottom: 7, paddingLeft: 10, 
                        paddingRight: 10, color: 'white', fontSize:17, 
                        fontFamily: 'Nunito-Bold'}}>Reset Story Groups</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}

export default ServiceProvider;