import React, {Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View} from 'react-native';

var data = [{key:'Bruce'},
            {key:'Crixus'},
            {key:'Spartacus'},
            {key:'Gannecus'},
            {key:'Omeneous'},
            {key:'Agron'},
            {key:'Lexicus'},
            {key:'Liscus'},
            {key:'Donor'}];

var renderItem = ({item})=>
    <Text style={styles.item}>{item.key}</Text>;

export default class FlatListBasics extends Component{
    render(){
        return (
            <View style={styles.container}>
                <FlatList 
                    data={data}
                    renderItem={renderItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
        color:'#ff0000',
    },
});