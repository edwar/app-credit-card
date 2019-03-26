import {
    FETCH_DATA_ADD_CREDIT_CARD_RESET,
    FETCH_DATA_DELETE_CREDIT_CARD_RESET,
    FETCH_DATA_UPDATE_CREDIT_CARD_RESET
} from '../constants'

export const getDataAddCreditCardReset = () => {
    return {
        type: FETCH_DATA_ADD_CREDIT_CARD_RESET
    }
}

export const getDataDeleteCreditCardReset = () => {
    return {
        type: FETCH_DATA_DELETE_CREDIT_CARD_RESET
    }
}

export const getDataUpdateCreditCardReset = () => {
    return {
        type: FETCH_DATA_UPDATE_CREDIT_CARD_RESET
    }
}