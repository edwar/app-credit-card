import { StyleSheet } from "react-native"
import { height, width } from '../../utils/screen'
import { Primary } from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        backgroundColor: Primary,
        height: height / 4,
        alignItems: 'center',
        elevation: 1
    },
    bottom: {
        flex: 1,
        backgroundColor: 'transparent',
        elevation: 1,
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogoList: {
        width: 250,
        height: 250,
        marginHorizontal: 5,
        marginTop: 50,
    },
    row: {
        flexDirection: 'row',
        width: width - 60,
        justifyContent: 'space-between',
        height: 55
    },
    title: {
        fontFamily: 'Nunito-bold',
        fontSize: 19
    },
    description: {
        fontFamily: 'Nunito-light',
        fontSize: 19
    }
})