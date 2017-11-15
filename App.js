import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './components/Bananas';
import LotsOfGreetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';
import LotsOfStyles from './components/LotsOfStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import FlexDirectionBasics from './components/FlexDirectionBasics';
import JustifyContentBasics from './components/JustifyContentBasics';
import AlignItemsBasics from './components/AlignItemsBasics';
import PizzaTranslator from './components/PizzaTranslator';
import ButtonBasics from './components/ButtonBasics';
import Touchables from './components/Touchables';
import ScrollViewSample from './components/ScrollViewSample';
import FlatListBasics from './components/FlatListBasics';
import SectionListBasics from './components/SectionListBasics';
import NetworkingSample from './components/NetworkingSample';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NetworkingSample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
