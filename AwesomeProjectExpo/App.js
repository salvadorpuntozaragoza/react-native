import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class myButton extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: 'red',
    };
  }

  onPressButton = () => {
    if (this.state.buttonColor === 'red'){
      this.setState({ buttonColor: 'green' });
    }
    else {
      this.setState({ buttonColor: 'red' });
    }
  }

  render () {
    return (
      <View style = {styles.viewMain}>
        <Button
          color = {this.state.buttonColor},
          title = "Press me",
          onPress = {this.onPressButton},
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    viewMain: {
      flex: 1,
      justifyContent: 'center',
    }
  });
}
