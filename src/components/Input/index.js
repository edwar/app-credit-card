import React, { PureComponent } from 'react'
import { View, TextInput, Text, Image } from 'react-native'
import { styles } from './styles'

class Input extends PureComponent {
    getInnerRef = () => this.ref;
    handleChange = value => {
        this.props.onChange(this.props.name, value)
    }
    handleTouch = () => {
        this.props.onTouch(this.props.name)
    }
    render() {
        const {
            styleIcon,
            source,
            error,
            style,
            styleroot,
            styleError = {},
            styletext,
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
                    <TextInput
                        {...rest}
                        style={[styles.textInput, styletext]}
                        onChangeText={this.handleChange}
                        ref={(r) => this.ref = r}
                        onBlur={this.handleTouch}
                    />
                </View>
                {error && <Text style={[styles.error, styleError]}>{error}</Text>}
            </View>
        )
    }
}

export default Input