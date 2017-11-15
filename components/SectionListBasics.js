import React, {Component} from 'react';
import {AppRegistry, SectionList, StyleSheet, Text, View} from 'react-native';

var sections = [
    {title:'D', data:[{key:'Devin'}]},
    {title:'J', data:[{key:'Bruce'},{key:'Crixus'},{key:'Spartacus'},{key:'Gannecus'},{key:'Omeneous'},{key:'Agron'},{key:'Lexicus'},{key:'Liscus'},{key:'Donor'}]},
];

var renderSectionHeader = ({section})=>
<Text style={styles.sectionHeader}>{section.title}</Text>;

var renderItem = ({item})=>
<Text style={styles.item}>{item.key}</Text>;

export default class SectionListBasics extends Component{
    render(){
        return (
            <View style={styles.container}>
                <SectionList 
                    sections={sections}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22,
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'rgba(247,247,247,1.0)',
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
    },
});

AppRegistry.registerComponent('ReactNativeLearning', ()=>SectionListBasics);