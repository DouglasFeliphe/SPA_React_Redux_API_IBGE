import { LISTAR_MUNICIPIOS } from '../actions/municipios';
import axios from 'axios'

const initialState = []

export default function municipiosReducer(state = initialState, action) {
    switch (action.type) {
        case LISTAR_MUNICIPIOS: {
            return action.payload
        }
        default:
            return state
    }
}

// Thunk function
export function fetchMunicipios(estadoSelecionado) {
    return async function fetchMunicipiosThunk(dispatch, getState) {
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`
        const response = await axios.get(url)
        dispatch({ type: LISTAR_MUNICIPIOS, payload: response.data })
    }
}



