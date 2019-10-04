import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class myButton extends Component() {

  // constructor(){
  //   super()
  //   this.state = {
  //     buttonColor: 'red',
  //   }
  // }

  // onPressButton = () => {
  //   if (this.state.buttonColor === 'red'){
  //     this.setState({ buttonColor: 'green' });
  //   }
  //   else {
  //     this.setState({ buttonColor: 'red' });
  //   }
  // }

  render () {
    return (
      <View style = {{flex: 1, justifyContent: 'center'}}>
        <Text>Hello world</Text>

        {/* <Button
          color = {this.state.buttonColor}
          title = "Press me"
          onPress = {this.onPressButton}
        /> */}
      </View>
    )
  }
}
