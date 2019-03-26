import { FETCH_DATA_DETAIL_CREDIT_CARD, FETCH_DATA_DETAIL_CREDIT_CARD_SUCCESS, FETCH_DATA_DETAIL_CREDIT_CARD_FAILED } from '../constants'

export const getDataDetailCreditCard = () => {
    return {
        type: FETCH_DATA_DETAIL_CREDIT_CARD
    }
}

export const getDataSuccessDetailCreditCard = (data) => {
    return {
        type: FETCH_DATA_DETAIL_CREDIT_CARD_SUCCESS,
        data
    }
}

export const getDataFailureDetailCreditCard = (error) => {
    return {
        type: FETCH_DATA_DETAIL_CREDIT_CARD_FAILED,
        error
    }
}