import { createStackNavigator, createAppContainer } from "react-navigation"
import React, { Component } from 'react'
import Screens from './screens'
import { Primary } from "../../utils/color";

class Nav extends Component {
  render() {
    const AppNavigator = createStackNavigator(Screens,
      {
        initialRouteName: "Home",
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: Primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
          },
        },
      }
    );
    const AppContainer = createAppContainer(AppNavigator);
    return(
      <AppContainer/>
    )
  }
}

export default Nav