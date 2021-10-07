import  { all } from "redux-saga/effects"
import { userSaga } from "../features/userManagement/userSaga"

function* helloSaga(){
    console.log("hello saga")
}

export function* rootSaga(){
   yield all([
       helloSaga(),
       userSaga()
    ])
}