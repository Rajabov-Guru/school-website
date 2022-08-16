import $api from '../http/index';
import SERVER_API from '../http/apiConsts';

export default class AuthService{

    static async login(email:string, password:string){
        return $api.post(SERVER_API.LOGIN, {email, password});
    }

    static async logout(){
        return $api.post(SERVER_API.LOGOUT);
    }
}