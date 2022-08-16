import $api from '../http/index';
import SERVER_API from '../http/apiConsts';

export default class CourseService{

    static async getAll(){
        return $api.get(SERVER_API.COURSES);
    }

    static async getOne(id:number){
        return $api.get(`${SERVER_API.COURSES}/${id}`);
    }

    static async create(data:FormData){
        return $api.post(SERVER_API.COURSES, data);
    }

    static async update(data:FormData){
        return $api.put(SERVER_API.COURSES, data);
    }

    static async delete(id:number){
        return $api.delete(`${SERVER_API.COURSES}/${id}`);
    }


}