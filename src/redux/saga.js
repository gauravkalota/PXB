import {call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {SET_NUMBER} from './constants';

function* fetchNumber(){
    alert('this function invoked')
}


function* saga(){
    yield takeLatest(SET_NUMBER,fetchNumber);
}

export default saga;



