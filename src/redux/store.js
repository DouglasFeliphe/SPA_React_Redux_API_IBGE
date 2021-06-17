import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from '../redux/reducers/rootReducers'


const apply = applyMiddleware(thunkMiddleware)
const composedEnhancer = composeWithDevTools(apply)

const store = createStore(
    rootReducers,
    composedEnhancer
)

export default store