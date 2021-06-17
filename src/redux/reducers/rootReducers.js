import { combineReducers } from 'redux'
import estadosReducer from './estados'
import municipiosReducer from './municipios'
import informacoesMunicipioReducer from './informacoesMunicipio';

const rootReducer = combineReducers({
    estados: estadosReducer,
    municipios: municipiosReducer,
    informacoesMunicipio: informacoesMunicipioReducer
})

export default rootReducer
