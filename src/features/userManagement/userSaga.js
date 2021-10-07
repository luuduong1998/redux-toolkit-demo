import { takeLatest, put, call } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { getData, getDataSuccessfully, getDataFail } from "./user"
import { getUser } from "../../services/userService"

function* getAllData(payload){
    try{
        const result = yield call(getUser)
        yield put(getDataSuccessfully(result))
    }
    catch(err){
        yield put(getDataFail(err))
    }
}

export function* userSaga(){
    yield takeLatest(getData().type,getAllData)
}