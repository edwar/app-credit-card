import React from "react";
import { Dimensions } from 'react-native'
import {
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons,
    Entypo,
    FontAwesome,
    Feather,
    Ionicons,
    EvilIcons
} from '@expo/vector-icons'

export const { height } = Dimensions.get('window')
export const { width } = Dimensions.get('window')

export const icon = (type, name, color, sizeFont, stylesIcon) => {
    switch (type) {
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
        case 'AntDesign':
            return <AntDesign name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
        case 'MaterialIcons':
            return <MaterialIcons name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
        case 'Entypo':
            return <Entypo name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
        case 'FontAwesome':
            return <FontAwesome name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
        case 'Feather':
            return <Feather name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
        case 'Ionicons':
            return <Ionicons name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
        case 'EvilIcons':
        return <EvilIcons name={name} size={sizeFont ? sizeFont : 25} color={color} style={stylesIcon && { ...stylesIcon }} />
    }
}

export const formatCredtCard = (value) => {
    console.log(value)
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
}
  