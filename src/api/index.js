import { URL, PROJECT_NAME } from '../constants/endpoinst'

export const fetchListCreditCard = async () => {
    try {
        service = `/${PROJECT_NAME}/credit-card/list/`
        const URLEND = `${URL}${service}`
        return fetch(URLEND, {
            method: 'GET',
        }).then(response => Promise.all([response, response.json()]))
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchAddCreditCard = async (data) => {
    try {
        let headers = new Headers();
        service = `/${PROJECT_NAME}/credit-card/add/`
        const URLEND = `${URL}${service}`
        headers.append('Content-Type', 'application/json')
        return fetch(URLEND, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }).then(response => Promise.all([response, response.json()]))
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchDeleteCreditCard = async (data) => {
    try {
        service = `/${PROJECT_NAME}/credit-card/delete/${data.id}`
        const URLEND = `${URL}${service}`
        return fetch(URLEND, {
            method: 'POST'
        }).then(response => Promise.all([response, response.json()]))
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchUpdateCreditCard = async (data) => {
    try {
        let headers = new Headers();
        service = `/${PROJECT_NAME}/credit-card/update/${data._id}`
        const URLEND = `${URL}${service}`
        headers.append('Content-Type', 'application/json')
        return fetch(URLEND, {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        }).then(response => Promise.all([response, response.json()]))
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchDetailCreditCard = async (data) => {
    try {
        service = `/${PROJECT_NAME}/credit-card/detail/${data.id}`
        const URLEND = `${URL}${service}`
        return fetch(URLEND, {
            method: 'GET'
        }).then(response => Promise.all([response, response.json()]))
    } catch (error) {
        console.log(error)
        return error
    }
}