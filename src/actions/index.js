import { fetchListCreditCard, fetchAddCreditCard, fetchDeleteCreditCard, fetchUpdateCreditCard, fetchDetailCreditCard } from '../api'
import { getDataAddCreditCardReset, getDataDeleteCreditCardReset, getDataUpdateCreditCardReset } from './dataReset'
import { getDataListCreditCard, getDataSuccessListCreditCard, getDataFailureListCreditCard } from './dataListCreditCard'
import { getDataAddCreditCard, getDataSuccessAddCreditCard, getDataFailureAddCreditCard } from './dataAddCreditCard'
import { getDataDeleteCreditCard, getDataSuccessDeleteCreditCard, getDataFailureDeleteCreditCard } from './dataDeleteCreditCard'
import { getDataUpdateCreditCard, getDataSuccessUpdateCreditCard, getDataFailureUpdateCreditCard } from './dataUpdateCreditCard'
import { getDataDetailCreditCard, getDataSuccessDetailCreditCard, getDataFailureDetailCreditCard } from './dataDetailCreditCard'

export const fetchDataListCreditCard = () => {
    return async (dispatch) => {
        dispatch(getDataListCreditCard())
        fetchListCreditCard()
            .then(([respuesta, json]) => {
                if(respuesta.ok) {
                    dispatch(getDataSuccessListCreditCard(json))
                } else {
                    dispatch(getDataFailureListCreditCard(json))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(getDataFailureListCreditCard(err))
            })
    }
}

export const fetchDataAddCreditCard = (data) => {
    return async (dispatch) => {
        dispatch(getDataAddCreditCard())
        fetchAddCreditCard(data)
            .then(([respuesta, json]) => {
                if(respuesta.ok) {
                    dispatch(getDataSuccessAddCreditCard(json))
                } else {
                    dispatch(getDataFailureAddCreditCard(json))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(getDataFailureAddCreditCard(err))
            })
    }
}

export const fetchDataAddCreditCardReset = () => {
    return async (dispatch) => {
        dispatch(getDataAddCreditCardReset())
    }
}

export const fetchDataDeleteCreditCard = (data) => {
    return async (dispatch) => {
        dispatch(getDataDeleteCreditCard())
        fetchDeleteCreditCard(data)
            .then(([respuesta, json]) => {
                if(respuesta.ok) {
                    dispatch(getDataSuccessDeleteCreditCard(json))
                } else {
                    dispatch(getDataFailureDeleteCreditCard(json))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(getDataFailureDeleteCreditCard(err))
            })
    }
}

export const fetchDataDeleteCreditCardReset = () => {
    return async (dispatch) => {
        dispatch(getDataDeleteCreditCardReset())
    }
}

export const fetchDataUpdateCreditCard = (data) => {
    return async (dispatch) => {
        dispatch(getDataUpdateCreditCard())
        fetchUpdateCreditCard(data)
            .then(([respuesta, json]) => {
                if(respuesta.ok) {
                    dispatch(getDataSuccessUpdateCreditCard(json))
                } else {
                    dispatch(getDataFailureUpdateCreditCard(json))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(getDataFailureUpdateCreditCard(err))
            })
    }
}

export const fetchDataUpdateCreditCardReset = () => {
    return async (dispatch) => {
        dispatch(getDataUpdateCreditCardReset())
    }
}

export const fetchDataDetailCreditCard = (data) => {
    return async (dispatch) => {
        dispatch(getDataDetailCreditCard())
        fetchDetailCreditCard(data)
            .then(([respuesta, json]) => {
                if(respuesta.ok) {
                    dispatch(getDataSuccessDetailCreditCard(json))
                } else {
                    dispatch(getDataFailureDetailCreditCard(json))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(getDataFailureDetailCreditCard(err))
            })
    }
}