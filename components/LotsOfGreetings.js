import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Greeting extends Component{
    render(){
        return (
            <Text>Hello {this.props.name}!</Text>
        )
    }
}

export default class LotsOfGreetings extends Component{
    render(){
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="Bruce"/>
                <Greeting name="Crixus"/>
                <Greeting name="Spatarcus"/>
            </View>
        )
    }
}

AppRegistry.registerComponent('ReactNativeLearning', ()=>LotsOfGreetings);

