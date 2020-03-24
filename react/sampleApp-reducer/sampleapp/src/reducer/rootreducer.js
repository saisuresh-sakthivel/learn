import { bindActionCreators } from "redux";

const rootreducer = (state={name:"sample"},action) =>{
    switch(action.type){
        case "REC_NAME":
            return{
                ...state,
                name:action.value
            }
            break;
    }
    return state;
}
export default rootreducer;