import * as constants from '../../utils/commonConstant'

export function login(username, password, access){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'login',
        method: 'post',
        query: {username, password, access}

    }
}

export function update_username(name){
    return {
        type: 'username',
        data: name
     }
 };
export function signout(name, status){
    return {
        type: 'signout'
     }
 }