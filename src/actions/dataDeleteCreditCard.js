import { FETCH_DATA_DELETE_CREDIT_CARD, FETCH_DATA_DELETE_CREDIT_CARD_SUCCESS, FETCH_DATA_DELETE_CREDIT_CARD_FAILED } from '../constants'

export const getDataDeleteCreditCard = () => {
    return {
        type: FETCH_DATA_DELETE_CREDIT_CARD
    }
}

export const getDataSuccessDeleteCreditCard = (data) => {
    return {
        type: FETCH_DATA_DELETE_CREDIT_CARD_SUCCESS,
        data
    }
}

export const getDataFailureDeleteCreditCard = (error) => {
    return {
        type: FETCH_DATA_DELETE_CREDIT_CARD_FAILED,
        error
    }
}