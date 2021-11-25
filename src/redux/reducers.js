import { SET_SMURF_NAME,SET_PASS} from './constants';

const INITIAL_STATE = {
    smurfName: null,
    pass:null,
    
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
                pass: action.pass,
            }
        default:
            state;
    }
}
export default reducer;