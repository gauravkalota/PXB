import {SET_SMURF_NAME} from './constants';

export function setSmurfName(smurfName){
    return {
       type: SET_SMURF_NAME,
       smurfName,
    }
}