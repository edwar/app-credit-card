import { FETCH_DATA_LIST_CREDIT_CARD, FETCH_DATA_LIST_CREDIT_CARD_SUCCESS, FETCH_DATA_LIST_CREDIT_CARD_FAILED } from '../constants'

export const getDataListCreditCard = () => {
    return {
        type: FETCH_DATA_LIST_CREDIT_CARD
    }
}

export const getDataSuccessListCreditCard = (data) => {
    return {
        type: FETCH_DATA_LIST_CREDIT_CARD_SUCCESS,
        data
    }
}

export const getDataFailureListCreditCard = (error) => {
    return {
        type: FETCH_DATA_LIST_CREDIT_CARD_FAILED,
        error
    }
}