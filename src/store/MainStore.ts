import {makeAutoObservable} from "mobx";
import {IAdvantage, IArticle, ICourse, IFeedback, IInform, INews} from "../types/mainTypes";
import {mockAdvantages, mockArticles, mockCourses, mockInform, mockNews} from "../mock";
import AdvantageService from "../services/AdvantageService";
import FeedbackService from "../services/FeedbackService";
import InformService from "../services/InformService";
import CourseService from "../services/CourseService";
import PostService from "../services/PostService";


class MainStore {

    advantages:IAdvantage[]=[];
    courses:ICourse[]=[];
    articles:IArticle[]=[];
    newsItems:INews[]=[];
    inform:IInform=mockInform;

    isLoading:boolean =  false;


    constructor() {
        makeAutoObservable(this);
    }

    setLoading(bool:boolean) {
        this.isLoading = bool;
    }

    setAdvantages(advantages:IAdvantage[]){
        this.advantages = advantages;
    }

    setArticles(articles:IArticle[]){
        this.articles = articles;
    }

    setCourses(courses:ICourse[]){
        this.courses = courses;
    }

    setNews(items:INews[]){
        this.newsItems=items;
    }

    setInform(value:IInform){
        this.inform = value;
    }

    async getInform(){
        this.setLoading(true);
        try{
            const response = await InformService.getCurrent()
            this.setInform(response.data);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async getAdvantages(){
        this.setLoading(true);
        try{
            const response = await AdvantageService.getAll();
            this.setAdvantages(response.data);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }

    }

    async getCourses(){
        this.setLoading(true);
        try{
            const response = await CourseService.getAll();
            this.setCourses(response.data);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }

    }

    async sendFeedback(data:IFeedback){
        this.setLoading(true);
        try{
            await FeedbackService.create(data);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }


    async getArticles(){
        this.setLoading(true);
        try{
            const response = await PostService.getAllArticles();
            this.setArticles(response.data);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }

    }

    async getNews(){
        this.setLoading(true);
        try{
            const response = await PostService.getAllNews();
            this.setNews(response.data);

        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }

    }

}

export default MainStore;