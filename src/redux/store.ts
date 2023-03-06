import { createStore } from 'redux';
import cakeReducers from './cake/cakeReducers';

const store = createStore(cakeReducers);

export default store; 

