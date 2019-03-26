import { StyleSheet } from 'react-native'
import { width } from '../../utils/screen'
import { Secundary } from '../../utils/color';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerMark: {
        borderColor: 'red',
        borderWidth: 1
    },
    fab: { 
        position: 'absolute', 
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: Secundary, 
        borderRadius: 30, 
        elevation: 8 
    },
    contentModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(1, 1, 1, .5)'
    },
    contentModalMark: {
        borderColor: 'green',
        borderWidth: 1
    },
    modalInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDEDED',
        borderWidth: .5,
        borderColor: 'transparent',
        height: 45,
        width: '100%',
        borderRadius: 5
    },
    containerModal: {
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 1.2
    },
    containerModalMark: {
        borderColor: 'blue',
        borderWidth: 1
    },
    textModal: {
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontSize: 18,
        color: 'gray',
        marginBottom: 15
    },
    textModalMark: {
        borderColor: 'yellow',
        borderWidth: 1
    },
    sendButton: {
        width:'80%',
        marginVertical: 10
    },
    constainerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reload: {
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: Secundary, 
        borderRadius: 30, 
        elevation: 8 
    },
	rowFront: {
		alignItems: 'center',
		backgroundColor: '#E6E6E6',
		borderBottomColor: '#767676',
		borderBottomWidth: .4,
		justifyContent: 'center',
        height: 50,
        width: width,

	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
    },
    backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 50
	},
	backRightBtnLeft: {
		backgroundColor: '#00BFFF',
		right: 50
	},
	backRightBtnRight: {
		backgroundColor: '#04B4AE',
		right: 0
    },
    
	backLeftBtnLeft: {
		backgroundColor: '#FF0000',
		left: 0
    },
    imageLogoList: {
        width: 25,
        height: 25,
        marginHorizontal: 5
    },
    rowCreditCardList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        paddingHorizontal: 15
    },
    textNumberCreditCard: {
        fontFamily: 'Nunito-bold',
        color: 'gray'
    }
})
