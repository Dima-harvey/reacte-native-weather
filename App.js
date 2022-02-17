import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
  View,
  ImageBackground,
} from 'react-native'

import SearchInput from './components/SearchInput'
import sunny from './assets/sunny.jpg'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'San Francisco',
    }
  }
  handleUpdateLocation = (city) => {
    this.setState({
      location: city,
    })
  }
  render() {
    const { location } = this.state
    
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground
          source={sunny}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>
              Light Cloud
            </Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
})
