import { FETCH_DATA_UPDATE_CREDIT_CARD, FETCH_DATA_UPDATE_CREDIT_CARD_SUCCESS, FETCH_DATA_UPDATE_CREDIT_CARD_FAILED } from '../constants'

export const getDataUpdateCreditCard = () => {
    return {
        type: FETCH_DATA_UPDATE_CREDIT_CARD
    }
}

export const getDataSuccessUpdateCreditCard = (data) => {
    return {
        type: FETCH_DATA_UPDATE_CREDIT_CARD_SUCCESS,
        data
    }
}

export const getDataFailureUpdateCreditCard = (error) => {
    return {
        type: FETCH_DATA_UPDATE_CREDIT_CARD_FAILED,
        error
    }
}