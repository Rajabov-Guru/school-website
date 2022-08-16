import $api from '../http/index';
import SERVER_API from '../http/apiConsts';

export default class InformService{

    static async getAll(){
        return $api.get(SERVER_API.INFORM);
    }

    static async getOne(id:number){
        return $api.get(`${SERVER_API.INFORM}/${id}`);
    }

    static async create(data:FormData){
        return $api.post(SERVER_API.INFORM, data);
    }

    static async update(data:FormData){
        return $api.put(SERVER_API.INFORM, data);
    }

    static async delete(id:number){
        return $api.delete(`${SERVER_API.INFORM}/${id}`);
    }

    static async getCurrent(){
        return $api.get(SERVER_API.CURRENT_INFORM);
    }


}