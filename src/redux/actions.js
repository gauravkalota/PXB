import {SET_SMURF_NAME, SET_PASS} from './constants';

export function setSmurfName(smurfName){
    return {
       type: SET_SMURF_NAME,
       smurfName,
    }
}

export function setPassword(smurfName1){
    return {
       type: SET_PASS,
       smurfName1,
    }
}