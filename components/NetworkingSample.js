import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ActivityIndicator, FlatList, Text, View} from 'react-native';

var styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:22,
    },
    pageTitle:{
        height:60,
        fontSize:30,
        color:'#ee1234',
        backgroundColor:'#eee',
        textAlign:'center',
        lineHeight:60,
        fontWeight:'bold',
    },
    listItem:{
        height:44,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:2,
        alignItems:'center',
    },
    separator:{
        height:1,
        width:"100%",
        backgroundColor:'#eee',
    },
    title:{
        fontSize:24,
        marginLeft:20,
        color:'#333',
    },
    releaseYear:{
        fontSize:12,
        marginRight:20,
        color:'#ccc',
    },
    indicatorContainer:{
        flex:1,
        justifyContent:'center',
    },
    activityIndicator:{
        
    }
});

export default class Movies extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true
        }
    }

    _renderItem = ({item})=>
        <View style={styles.listItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.releaseYear}>{item.releaseYear}</Text>
        </View>   

    _separator = ()=>
        <View style={styles.separator}></View>

    _keyExtractor = (item, index)=>item.title;

    componentDidMount(){
        console.log("did mount");
        return fetch('https://facebook.github.io/react-native/movies.json')
                .then((response)=>response.json())
                .then((responseJson)=>{
                    this.setState({
                        isLoading:false,
                        dataSource:responseJson.movies,
                    }, function(){
                        
                    });
                })
                .catch((error)=>{
                    console.error(error);
                })
    }

    render(){
        if(this.state.isLoading){
            return (
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator color='#ff0000'/>
                </View>
            );
        }

        console.log(this.state.dataSource);

        return (
            <View style={styles.container}>
                <Text style={styles.pageTitle}>All Movies</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._separator}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeLearning',()=>Movies);