import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { styles } from './styles'

class InputCreditCardDate extends PureComponent {
    getInnerRef = () => this.ref.getElement();
    handleChange = value => {
        if(this.props.onChange)
            this.props.onChange(this.props.name, value)
    }
    handleTouch = () => {
        if(this.props.onTouch)
            this.props.onTouch(this.props.name)
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
                        style={[styles.textInput, styletext]}
                        onChangeText={this.handleChange}
                        ref={(r) => this.ref = r}
                        onBlur={this.handleTouch}
                        type='datetime'
                        options={{
                            obfuscated: false,
                            format: 'MM/YY'
                        }}
                    />
                </View>
                {error && <Text style={[styles.error, styleError]}>{error}</Text>}
            </View>
        )
    }
}

export default InputCreditCardDate