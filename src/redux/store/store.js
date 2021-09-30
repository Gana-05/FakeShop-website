import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';
const store = createStore(rootReducer, {}, devToolsEnhancer(),
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
export default store;