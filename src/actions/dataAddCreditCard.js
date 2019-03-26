import { FETCH_DATA_ADD_CREDIT_CARD, FETCH_DATA_ADD_CREDIT_CARD_SUCCESS, FETCH_DATA_ADD_CREDIT_CARD_FAILED } from '../constants'

export const getDataAddCreditCard = () => {
    return {
        type: FETCH_DATA_ADD_CREDIT_CARD
    }
}

export const getDataSuccessAddCreditCard = (data) => {
    return {
        type: FETCH_DATA_ADD_CREDIT_CARD_SUCCESS,
        data
    }
}

export const getDataFailureAddCreditCard = (error) => {
    return {
        type: FETCH_DATA_ADD_CREDIT_CARD_FAILED,
        error
    }
}