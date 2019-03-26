export default (creditCard) => {
    let result = ''
    switch (creditCard) {
        case 'VISA':
            result = require('../../assets/iconos/visa.png')
            return result
        case 'MASTERCARD':
            result = require('../../assets/iconos/mastercard.png');
            return result
        case 'AMEX':
            result = require('../../assets/iconos/amex.png');
            return result
        default:
            return null
    }
}