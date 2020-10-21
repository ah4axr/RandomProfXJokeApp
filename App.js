import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class JokeApp extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      profXJoke: "",
    };
  }

  componentDidMount() {
    fetch("http://api.icndb.com/jokes/random?firstName=Prof&lastName=X&limitTo=[nerdy]")
    .then(response => response.json()).then(parsed => {
      this.setState({
        profXJoke:  parsed.value.joke,
      })})
    this.timerID = setInterval(() => this.getNewJoke(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getNewJoke() {
    return fetch("http://api.icndb.com/jokes/random?firstName=Prof&lastName=X&limitTo=[nerdy]")
    .then(response => response.json()).then(parsed => {
      this.setState({
        profXJoke:  parsed.value.joke,
      })
    });

    
  }
  render() {
    let clockElement = (
      <View style={styles.container}>
        <Text>Prof X joke:</Text>
        <Text> {this.state.profXJoke}</Text>
      </View>
    );
    return clockElement;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
