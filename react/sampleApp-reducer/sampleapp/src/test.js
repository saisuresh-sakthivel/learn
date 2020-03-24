import {createStore} from 'redux';
const reducer = function(state = "NA",action){
    return state;
}
const store = createStore(reducer)
console.log(store.getState());
