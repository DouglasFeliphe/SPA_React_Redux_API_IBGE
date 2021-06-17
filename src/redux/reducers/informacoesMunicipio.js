import { MOSTRAR_INFORMACOES_MUNICIPIO } from '../actions/municipios';
import axios from 'axios'

const initialState = []

export default function informacoesMunicipioReducer(state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_INFORMACOES_MUNICIPIO: {
            return action.payload
        }
        default:
            return state
    }
}

export function fetchInformacoes(municipioSelecionado) {
    return async function fetchMunicipiosThunk(dispatch, getState) {
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipioSelecionado}`

        const response = await axios.get(url)

        const { microrregiao } = response.data
        const { mesorregiao } = microrregiao
        const { UF } = mesorregiao
        const { regiao } = UF

        const informacoes = [
            microrregiao,
            mesorregiao,
            UF,
            regiao
        ]

        dispatch({ type: MOSTRAR_INFORMACOES_MUNICIPIO, payload: informacoes })
    }
}
