const redux = require('redux');
const createStore = redux.createStore;
const reducer = (state={},action)=>{
    switch(action.type){
        case 'INC':
            state = {...state,
                 name:"sai"}
    }
    return state;
}
const store = createStore(reducer)
console.log(store.getState());
store.dispatch({type:"INC"});
console.log(store.getState());