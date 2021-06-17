import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchEstados } from './redux/reducers/estados';
import { fetchInformacoes } from './redux/reducers/informacoesMunicipio';


store.dispatch(fetchEstados)
store.dispatch(fetchInformacoes)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#app')
)
