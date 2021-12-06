import {call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {SET_PASS, SET_SMURF_NAME, SET_OBJ} from './constants';

function* fetchNumber(){
    //alert('this function invoked')
}

function* fetchNumber1(){
    //alert('this function2 invoked')
}

function* fetchNumber2(){
    //alert('this function3 invoked')
}




function* saga(){
    yield takeLatest(SET_SMURF_NAME,fetchNumber);
    yield takeLatest(SET_PASS,fetchNumber1);
    yield takeLatest(SET_OBJ,fetchNumber2);
}

export default saga;



