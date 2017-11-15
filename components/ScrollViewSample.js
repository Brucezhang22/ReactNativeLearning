import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ScrollView, Image, Text} from 'react-native';
var favIcon = require('../images/favicon.png');

export default class ScrollViewSample extends Component{
    render(){
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}>
                <Text style={styles.text}>Scroll me plz</Text>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Text style={styles.text}>If you like</Text>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Text style={styles.text}>Scrolling down</Text>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Text style={styles.text}>What's the best?</Text>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Text style={styles.text}>Framework around?</Text>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Image source={favIcon}/>
                <Text style={styles.text}>React Native</Text>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    text:{
        fontSize:96,
    }
});

AppRegistry.registerComponent('ReactNativeLearning', ()=>ScrollViewSample);