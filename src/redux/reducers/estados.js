import { LISTAR_ESTADOS } from '../actions/estados';
import axios from 'axios'


const initialState = []

export default function estadosReducer(state = initialState, action) {
    switch (action.type) {
        case LISTAR_ESTADOS: {
            return action.payload
        }
        default:
            return state
    }
}

// Thunk function
export async function fetchEstados(dispatch, getState) {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    dispatch({ type: LISTAR_ESTADOS, payload: response.data })
}



