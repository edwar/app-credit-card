import React, { Component } from 'react'
import { View, Image, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { formatCredtCard } from '../../utils/screen'
import { Primary } from '../../utils/color'
import { fetchDataDetailCreditCard } from '../../actions'
import logoCreditCard from "../../utils/logoCreditCard";
import { styles } from './style.js'

class DetailCreditCard extends Component {
    static navigationOptions = {
        title: 'Detalle de la tarjeta',
        /* No more header config here! */
    };
    componentWillMount() {
        this.props.fetchDataDetailCreditCard({ id: this.props.navigation.state.params.id })
    }
    render() {
        console.log(this.props.detailCreditCard)
        return(
            <View style={styles.container}>
                {this.props.detailCreditCard.isFetching ?
                    <ActivityIndicator size="large" color={Primary} />:
                    <React.Fragment>
                        <View style={styles.top}>
                            <Image style={styles.imageLogoList} source={logoCreditCard(this.props.detailCreditCard.data.franchise)} resizeMode='contain'/>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.row}>
                                <Text style={styles.title}>Número: </Text>
                                <Text style={styles.description}>{formatCredtCard(this.props.detailCreditCard.data.cardNumber ? this.props.detailCreditCard.data.cardNumber : '0')}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.title}>CVV: </Text>
                                <Text style={styles.description}>{this.props.detailCreditCard.data.secureCode}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.title}>Nombre: </Text>
                                <Text style={styles.description}>{this.props.detailCreditCard.data.ownerName}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.title}>Documento: </Text>
                                <Text style={styles.description}>{this.props.detailCreditCard.data.documentNumber}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.title}>Mes de expiración: </Text>
                                <Text style={styles.description}>{this.props.detailCreditCard.data.monthExpiration}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.title}>Año de expiración: </Text>
                                <Text style={styles.description}>{this.props.detailCreditCard.data.yearExpiration}</Text>
                            </View>
                        </View>
                    </React.Fragment>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        detailCreditCard: state.detailCreditCard
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchDataDetailCreditCard: (data) => dispatch(fetchDataDetailCreditCard(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailCreditCard)