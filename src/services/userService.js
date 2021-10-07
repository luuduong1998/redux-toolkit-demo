import axiosClient from "./axiosClient.service.js"

export const getUser = () => {
    return axiosClient
        .get('https://5e8aba18be5500001689e1bb.mockapi.io/DuogLT9/fakedata/Products')
        .then((res=>res))
        .catch(err => console.log(err))
}