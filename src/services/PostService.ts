import $api from '../http/index';
import SERVER_API from '../http/apiConsts';

export default class PostService{

    static async getAllNews(){
        return $api.get(SERVER_API.NEWS);
    }

    static async getAllArticles(){
        return $api.get(SERVER_API.ARTICLES);
    }

    static async getOne(id:number){
        return $api.get(`${SERVER_API.POSTS}/${id}`);
    }

    static async createNews(data:FormData){
        return $api.post(SERVER_API.NEWS, data);
    }

    static async createArticle(data:FormData){
        return $api.post(SERVER_API.ARTICLES, data);
    }

    static async updateNews(data:FormData){
        return $api.put(SERVER_API.NEWS, data);
    }

    static async updateArticle(data:FormData){
        return $api.put(SERVER_API.ARTICLES, data);
    }

    static async delete(id:number){
        return $api.delete(`${SERVER_API.POSTS}/${id}`);
    }


}