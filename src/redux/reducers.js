import { SET_SMURF_NAME} from './constants';

const INITIAL_STATE = {
    smurfName: null,
    
};


function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SMURF_NAME:
            return {
                ...state,
                smurfName: action.smurfName,
            }
        default:
            state;
    }
}
export default reducer;