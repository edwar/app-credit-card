import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-ui-lib'

import { styles } from './style'
import { Primary } from '../../utils/color';

class Home extends Component {
    static navigationOptions = {
        title: 'Inicio',
        /* No more header config here! */
    };
    render() {
        return(
            <View style={styles.content}>
                <Button
                    label='Tarjetas de credito'
                    color='white'
                    backgroundColor={Primary}
                    style={styles.sendButton}
                    onPress={() => this.props.navigation.push('ListCreditCard')}
                />
            </View>
        )
    }
}

export default Home
