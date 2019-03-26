import { FETCH_DATA_DELETE_CREDIT_CARD, FETCH_DATA_DELETE_CREDIT_CARD_SUCCESS, FETCH_DATA_DELETE_CREDIT_CARD_FAILED, FETCH_DATA_DELETE_CREDIT_CARD_RESET } from "../constants";

const initialState = {
    data: {},
    isFetching: false,
    error: false,
    success: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_DELETE_CREDIT_CARD_RESET:
            return {
                data: {},
                isFetching: false,
                error: false,
                success: false
            }
        case FETCH_DATA_DELETE_CREDIT_CARD:
            return {
                ...state,
                data: {},
                isFetching: true,
                error: false,
                success: false
            }
        case FETCH_DATA_DELETE_CREDIT_CARD_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false,
                success: true
            }
        case FETCH_DATA_DELETE_CREDIT_CARD_FAILED:
            return {
                ...state,
                isFetching: false,
                error: true,
                messageError: action.error,
                success: false
            }
        
        default:
            return state
    }
}