import {SET_SMURF_NAME, SET_PASS, SET_OBJ} from './constants';

export function setSmurfName(smurfName){
    return {
       type: SET_SMURF_NAME,
       smurfName,
    }
}

export function setSmurfPassword(pass){
    return {
       type: SET_PASS,
       pass,
    }
}

export function setobject(obj){
    return {
       type: SET_OBJ,
       obj,
    }
}