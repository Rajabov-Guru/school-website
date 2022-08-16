import $api from '../http/index';
import SERVER_API from '../http/apiConsts';
import {IFeedback} from "../types/mainTypes";

export default class FeedbackService{

    static async getAll(){
        return $api.get(SERVER_API.FEEDBACKS);
    }

    static async create(data:IFeedback){
        return $api.post(SERVER_API.FEEDBACKS, data);
    }

    static async delete(id:number){
        return $api.delete(`${SERVER_API.FEEDBACKS}/${id}`);
    }


}