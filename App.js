import React, { Component } from 'react'
import { Font } from 'expo'
import { Provider } from 'react-redux'
import AppContainer from './src/components/Nav'
import configureStore from './src/configureStore'

export default class App extends Component {
  componentWillMount() {
    this._cacheSplashResourcesAsync()
  }
  _cacheSplashResourcesAsync = async () => {
    await Font.loadAsync({
      'Nunito': require('./assets/Nunito/Nunito-Regular.ttf'),
      'Nunito-bold': require('./assets/Nunito/Nunito-Bold.ttf'),
      'Nunito-light': require('./assets/Nunito/Nunito-Light.ttf')
    })
  }
  render() {
    let store = configureStore()
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}
