import React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import { red } from 'ansi-colors';


export default class myButton extends React.Component{
  constructor(){
    super();
    this.state = {
      buttonColor: 'red'
    };
  }

  OnPressedButton() {
    if(this.state.buttonColor === 'red'){
      this.setState(buttonColor = 'green')
    }
    else{
      this.setState(buttonColor = 'red');
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text>Hello world</Text>
        <Button
        title = "Press me"
        onPress = {this.OnPressedButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
