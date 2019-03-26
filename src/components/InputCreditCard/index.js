import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import * as valid from 'card-validator'
import { styles } from './styles'   

class InputCreditCard extends PureComponent {
    getInnerRef = () => this.ref;
    handleChange = value => {
        if(this.props.onChange)
            this.props.onChange(this.props.name, value)
    }
    handleTouch = () => {
        if(this.props.onTouch)
            this.props.onTouch(this.props.name)
    }
    flag = (creditCard) =>{
        let result = ''
        if(creditCard.card) {
            switch (creditCard.card.type) {
                case 'visa':
                    if(creditCard.isPotentiallyValid && creditCard.isValid) {
                        result = require('../../../assets/iconos/visa.png')
                    } else {
                        result = require('../../../assets/iconos/visa_error.png')
                    }
                    return result
                case 'mastercard':
                    if(creditCard.isPotentiallyValid && creditCard.isValid) {
                        result = require('../../../assets/iconos/mastercard.png');
                    } else {
                        result = require('../../../assets/iconos/mastercard_error.png');
                    }
                    return result
                case 'american-express':
                    if(creditCard.isPotentiallyValid && creditCard.isValid) {
                        result = require('../../../assets/iconos/amex.png');
                    } else {
                        result = require('../../../assets/iconos/amex_error.png');
                    }
                    return result
                default:
                    return null
            }
        }
        return null
    }
    render() {
        const {
            styleIcon,
            source,
            error,
            style,
            styleroot,
            styletext,
            styleError = {},
            ...rest
        } = this.props
        const creditCard = valid.number(this.props.value)
        return (
            <View style={[styleroot ? {...styleroot} : styles.root]}>
                <View style={[style ? {...style} : styles.contentInput]}>
                    {source &&
                        <Image
                            source={source}
                            style={[styles.icon, {...styleIcon}]}
                            resizeMode='contain'
                        />
                    }
                    <TextInputMask
                        {...rest}
                        style={[styles.textInput, creditCard.isPotentiallyValid && creditCard.isValid ? styletext : { color: 'red' }]}
                        onChangeText={this.handleChange}
                        ref={(r) => this.ref = r}
                        onBlur={this.handleTouch}
                        type='credit-card'
                        options={{
                            obfuscated: false
                        }}
                    />
                    {creditCard.card &&
                        <Image
                            source={this.flag(creditCard)}
                            style={[styles.icon, {...styleIcon}]}
                            resizeMode='contain'
                        />
                    }
                </View>
                {error && <Text style={[styles.error, styleError]}>{error}</Text>}
            </View>
        )
    }
}

export default InputCreditCard