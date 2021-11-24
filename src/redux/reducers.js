import { SET_SMURF_NAME,SET_PASS} from './constants';

const INITIAL_STATE = {
    smurfName: null,
    smurfName1:null,
    
};


function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SMURF_NAME:
            return {
                ...state,
                smurfName: action.smurfName,
            }
        case SET_PASS:
            return{
                ...state,
                smurfName1:action.smurfName1
            }
        default:
            state;
    }
}
export default reducer;