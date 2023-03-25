import {createStore} from 'redux'
import reducer from './reducers';

// // Подключение redux devtools
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const store =  createStore(reducer);


export default store