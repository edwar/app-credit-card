import React, { Component } from 'react'
import { View, Text, Modal, ActivityIndicator, ListView, TouchableHighlight, Image, Alert } from 'react-native'
import { Button, TouchableOpacity } from 'react-native-ui-lib'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { SwipeListView } from 'react-native-swipe-list-view';
import * as valid from 'card-validator'

import logoCreditCard from "../../utils/logoCreditCard";
import {
    fetchDataListCreditCard, fetchDataAddCreditCard, fetchDataAddCreditCardReset,
    fetchDataDeleteCreditCard, fetchDataDeleteCreditCardReset, fetchDataUpdateCreditCard,
    fetchDataUpdateCreditCardReset
} from '../../actions'
import InputCreditCard from '../../components/InputCreditCard'
import InputCreditCardDate from '../../components/InputCreditCardDate'
import Input from '../../components/Input'
import { icon, formatCredtCard } from '../../utils/screen'
import { Primary } from '../../utils/color'
import { styles } from './style.js'

class ListCreditCard extends Component {
    static navigationOptions = {
        title: 'Lista de tarjetas',
        /* No more header config here! */
    };
    constructor(props) {
        super(props)
        this.initValueCreditCard = {
            cardNumber: '',
            documentNumber: '',
            ownerName: '',
            expirationDate: '',
            cvv: ''
        }
        this.state = {
            openModalCreditCard: false,
            creditCard: this.initValueCreditCard,
            create: true
        }
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }
    componentWillMount() {
        this.props.fetchDataListCreditCard()
    }
    handleSubmitCreditCard = (values) => {
        this.setState({ openModalCreditCard: false })
        const creditCard = valid.number(values.cardNumber)
        const { card: { type } } = creditCard
        const franchise = type.toUpperCase() === 'AMERICAN-EXPRESS' ? 'AMEX' : type.toUpperCase()
        const { ownerName, documentNumber, expirationDate, cvv: secureCode } = values
        const cardNumber = values.cardNumber.replace(/\s/g,'')
        const dateSplit = expirationDate.split('/')
        const monthExpiration = dateSplit[0]
        const yearExpiration = '20'.concat(dateSplit[1])
        const data = {
            ownerName,
            documentNumber,
            cardNumber,
            monthExpiration,
            yearExpiration,
            franchise,
            secureCode
        }
        if(this.state.create) {
            this.setState({ creditCard: this.initValueCreditCard })
            this.props.fetchDataAddCreditCard(data)
        } else {
            data._id = this.state.creditCard._id
            this.props.fetchDataUpdateCreditCard(data)
            this.setState({ creditCard: this.initValueCreditCard })
        }
    }
    DeleteCreditCard = (id) => {
        Alert.alert(
            'Eliminar',
            '¿Estas seguro que quieres elinar esta tarjeta de crédito?',
            [
                {text: 'ACEPTAR', onPress: () => this.props.fetchDataDeleteCreditCard({id})},
                {text: 'CANCELAR', onPress: () => null},
            ],
            {cancelable: false}
        )
    }
    render() {
        const mark = true
        if(this.props.addCreditCard.success) {
            setTimeout(() => {
                this.props.fetchDataAddCreditCardReset()
                this.props.fetchDataListCreditCard()
            }, 300)
        }
        if(this.props.addCreditCard.error) {
            setTimeout(() => {
                this.props.fetchDataAddCreditCardReset()
            }, 300)
        }
        if(this.props.deleteCreditCard.success) {
            setTimeout(() => {
                this.props.fetchDataDeleteCreditCardReset()
                this.props.fetchDataListCreditCard()
            }, 300)
        }
        if(this.props.deleteCreditCard.error) {
            setTimeout(() => {
                this.props.fetchDataAddCreditCardReset()
            }, 300)
        }
        if(this.props.updateCreditCard.success) {
            setTimeout(() => {
                this.props.fetchDataUpdateCreditCardReset()
                this.props.fetchDataListCreditCard()
            }, 300)
        }
        if(this.props.updateCreditCard.error) {
            setTimeout(() => {
                this.props.fetchDataUpdateCreditCardReset()
            }, 300)
        }
        return (
            <View style={[styles.container, mark && styles.containerMark]}>
                <Modal animationType="slide" visible={this.state.openModalCreditCard} onRequestClose={() => this.setState({ openModalCreditCard: !this.state.openModalCreditCard, creditCard: this.initValueCreditCard }) } >
                    <View style={[styles.contentModal, mark && styles.contentModalMark]}>
                        <View style={[styles.containerModal, mark && styles.containerModalMark]}>
                            <Text style={[styles.textModal, mark && styles.textModalMark]}>Agregar tarjeta</Text>
                            <Formik
                                initialValues={this.state.creditCard}
                                onSubmit={this.handleSubmitCreditCard}
                                validationSchema={Yup.object().shape({
                                    cardNumber: Yup.number()
                                        .min(16, 'Ingresa un minimo de 16 caracteres')
                                        .required('Campo obligatorio'),
                                    documentNumber: Yup.string()
                                        .required('Campo obligatorio'),
                                    ownerName: Yup.string()
                                        .required('Campo obligatorio'),
                                    expirationDate: Yup.string()
                                        .min(5, 'Formato no valido')
                                        .max(5, 'Formato no valido')
                                        .required('Campo obligatorio'),
                                    cvv: Yup.string()
                                        .min(3, 'Formato no valido')
                                        .max(3, 'Formato no valido')
                                        .required('Campo ibligatorio')
                                })}
                                render={({
                                    values,
                                    handleSubmit,
                                    setFieldValue,
                                    errors,
                                    touched,
                                    setFieldTouched,
                                    isValid
                                }) => (
                                    <React.Fragment>
                                        <InputCreditCard autoCapitalize='none' returnKeyType='next' placeholder='Número de tarjeta' placeholderTextColor='#767676'
                                            style={styles.modalInput} styleroot={styles.modalInputRoot} styletext={{ color: '#666666' }}
                                            keyboardType='numeric' styleIcon={{width: 25, height: 25}} value={values.cardNumber}
                                            underlineColorAndroid='transparent' source={require('../../../assets/iconos/credit-card.png')}
                                            onChange={setFieldValue} name='cardNumber' error={touched.cardNumber && errors.cardNumber}
                                            onTouch={setFieldTouched} styleError={{ color: 'red', marginLeft: 20 }}
                                            blurOnSubmit={false} onSubmitEditing={() => this.secondModalTextInput.getInnerRef().focus()}
                                        />
                                        <Input autoCapitalize='none' returnKeyType='next' placeholder='Número de identificación' placeholderTextColor='#767676'
                                            style={styles.modalInput} styleroot={styles.modalInputRoot} styletext={{ color: '#666666' }}
                                            underlineColorAndroid='transparent' source={require('../../../assets/iconos/identity.png')}
                                            styleIcon={{width: 25, height: 25}} value={values.documentNumber}
                                            onChange={setFieldValue} name='documentNumber' error={touched.documentNumber && errors.documentNumber}
                                            onTouch={setFieldTouched} styleError={{ color: 'red', marginLeft: 20 }}
                                            blurOnSubmit={false} onSubmitEditing={() => this.thirdModalTextInput.getInnerRef().focus()}
                                            ref={(input) => { this.secondModalTextInput = input; }}
                                        />
                                        <Input autoCapitalize='words' returnKeyType='next' placeholder='Nombre del titular' placeholderTextColor='#767676'
                                            style={styles.modalInput} styleroot={styles.modalInputRoot} styletext={{ color: '#666666' }}
                                            underlineColorAndroid='transparent' source={require('../../../assets/iconos/user.png')}
                                            styleIcon={{width: 25, height: 25}} value={values.ownerName}
                                            onChange={setFieldValue} name='ownerName' error={touched.ownerName && errors.ownerName}
                                            onTouch={setFieldTouched} styleError={{ color: 'red', marginLeft: 20 }}
                                            blurOnSubmit={false} onSubmitEditing={() => this.fourthModalTextInput.getInnerRef().focus()}
                                            ref={(input) => { this.thirdModalTextInput = input; }}
                                        />
                                        <InputCreditCardDate autoCapitalize='none' returnKeyType='next' placeholder='Fecha de expiración' placeholderTextColor='#767676'
                                            keyboardType='numeric' style={styles.modalInput} styleroot={styles.modalInputRoot} styletext={{ color: '#666666' }}
                                            underlineColorAndroid='transparent' source={require('../../../assets/iconos/schedule.png')}
                                            styleIcon={{width: 25, height: 25}}  value={values.expirationDate}
                                            onChange={setFieldValue} name='expirationDate' error={touched.expirationDate && errors.expirationDate}
                                            onTouch={setFieldTouched} styleError={{ color: 'red', marginLeft: 20 }}
                                            blurOnSubmit={false} onSubmitEditing={() => this.fiveModalTextInput.getInnerRef().focus()}
                                            ref={(input) => { this.fourthModalTextInput = input; }}
                                        />
                                        <Input autoCapitalize='none' returnKeyType='done' placeholder='Código de seguridad' placeholderTextColor='#767676'
                                            keyboardType='numeric' style={styles.modalInput} styleroot={styles.modalInputRoot} styletext={{ color: '#666666' }}
                                            underlineColorAndroid='transparent' source={require('../../../assets/iconos/cvv.png')}
                                            styleIcon={{width: 25, height: 25}}  value={values.cvv}
                                            onChange={setFieldValue} name='cvv' error={touched.cvv && errors.cvv}
                                            onTouch={setFieldTouched} styleError={{ color: 'red', marginLeft: 20 }}
                                            ref={(input) => { this.fiveModalTextInput = input; }}
                                        />
                                        <View style={styles.boxSend}>
                                            <Button
                                                label='ACEPTAR'
                                                color='white'
                                                backgroundColor={!isValid ? '#767676' : Primary}
                                                style={styles.sendButton}
                                                labelStyle={styles.sendButtonLabel}
                                                onPress={isValid ? handleSubmit : () => null}
                                            />
                                        </View>
                                    </React.Fragment>
                                )}
                            />
                        </View>
                    </View>
                </Modal>
                {this.props.listCreditCard.isFetching &&
                    <View style={styles.constainerCenter}>
                        <ActivityIndicator size="large" color={Primary} />
                    </View>
                }
                {this.props.listCreditCard.error &&
                    <View style={styles.constainerCenter}>
                        <TouchableOpacity onPress={() => this.props.fetchDataListCreditCard()} style={styles.reload}>
                            {icon('MaterialCommunityIcons', 'reload', 'white')}
                        </TouchableOpacity>
                    </View>
                }
                {this.props.listCreditCard.success &&
                    <View style={styles.constainerCenter}>
                        <SwipeListView
                            enableEmptySections
                            dataSource={this.ds.cloneWithRows(this.props.listCreditCard.data)}
                            renderRow={ rowData => (
                                <TouchableHighlight
                                    onPress={ () => this.props.navigation.push('DetailCreditCard', { id: rowData._id }) }
                                    style={styles.rowFront}
                                    underlayColor={'#AAA'}
                                >
                                    <View style={styles.rowCreditCardList}>
                                        {icon('Ionicons', 'ios-arrow-back', 'gray')}
                                        <Image style={styles.imageLogoList} source={logoCreditCard(rowData.franchise)} resizeMode='contain'/>
                                        <Text style={styles.textNumberCreditCard}>{formatCredtCard(rowData.cardNumber)}</Text>
                                        {icon('Ionicons', 'ios-arrow-forward', 'gray')}
                                    </View>
                                </TouchableHighlight>
                            )}
                            renderHiddenRow={ (rowData) => (
                                <View style={styles.rowBack}>
                                    <TouchableOpacity style={[styles.backRightBtn, styles.backLeftBtnLeft]} onPress={ () => this.DeleteCreditCard(rowData._id) }>
                                        {icon('FontAwesome', 'trash', 'white')}
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={ () => this.props.navigation.push('DetailCreditCard', { id: rowData._id }) }>
                                        {icon('FontAwesome', 'eye', 'white')}
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ () => this.setState({
                                        creditCard: {
                                            ...rowData,
                                            cvv: rowData.secureCode,
                                            expirationDate: rowData.monthExpiration.concat("/").concat(rowData.yearExpiration[2]).concat(rowData.yearExpiration[3])
                                        },
                                        create: false,
                                        openModalCreditCard: true
                                    }) }>
                                        {icon('Entypo', 'edit', 'white')}
                                    </TouchableOpacity>
                                </View>
                            )}
                            leftOpenValue={50}
                            rightOpenValue={-100}
                        />
                    </View>
                }
                <TouchableOpacity onPress={() => this.setState({ openModalCreditCard: true, create: true })} style={styles.fab}>
                    {icon('Entypo', 'plus', 'white')}
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        listCreditCard: state.listCreditCard,
        addCreditCard: state.addCreditCard,
        deleteCreditCard: state.deleteCreditCard,
        updateCreditCard: state.updateCreditCard
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchDataListCreditCard: () => dispatch(fetchDataListCreditCard()),
        fetchDataAddCreditCard: (data) => dispatch(fetchDataAddCreditCard(data)),
        fetchDataAddCreditCardReset: () => dispatch(fetchDataAddCreditCardReset()),
        fetchDataDeleteCreditCard: (data) => dispatch(fetchDataDeleteCreditCard(data)),
        fetchDataDeleteCreditCardReset: () => dispatch(fetchDataDeleteCreditCardReset()),
        fetchDataUpdateCreditCard: (data) => dispatch(fetchDataUpdateCreditCard(data)),
        fetchDataUpdateCreditCardReset: () => dispatch(fetchDataUpdateCreditCardReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreditCard)
