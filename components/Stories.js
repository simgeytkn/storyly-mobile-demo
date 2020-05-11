import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Storyly } from 'storyly-react-native';

const Stories = (props) => {

    return(
        <View style={styles.stories}>
            <Text style={{fontSize: 20, fontFamily: 'Nunito-Bold',
                        color: '#000'}}>
                Welcome To {props.name[0]}
            </Text>

            <Storyly
                style={{ width: '100%', height: 120, marginTop: 15 }}
                storylyId= {props.name[1]}
                onLoad={storyGroupList => {}}
                onFail={errorMessage => {}}
                onPress={story => {}}
                onStoryOpen={() => {}}
                onStoryClose={() => {}}
            />
        </View>

    )
    
}

export default Stories;

const styles = StyleSheet.create({
    stories: {
        height: 170,
        marginLeft: 12,
    }
  })