import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    contentInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .35)',
        borderWidth: .5,
        borderColor: 'transparent',
        height: 45,
        borderRadius: 5
    },
    textInput: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        height: 45,
        color: 'white',
        fontFamily: 'Nunito'
    },
    icon: {
        margin: 5,
        alignItems: 'center'
    },
    root: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 5
    },
    error: {
        color: 'rgba(255, 255, 255, .8)',
        fontFamily: 'Nunito'
    }
})