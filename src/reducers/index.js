import { combineReducers } from 'redux'
import listCreditCard from './listCreditCardReducer'
import addCreditCard from './addCreditCardReducer'
import deleteCreditCard from './deleteCreditCardReducer'
import updateCreditCard from './updateCreditCardReducer'
import detailCreditCard from "./detailCreditCardReducer";

export default combineReducers({
    listCreditCard,
    addCreditCard,
    deleteCreditCard,
    updateCreditCard,
    detailCreditCard
})
