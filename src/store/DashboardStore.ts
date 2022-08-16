import {makeAutoObservable} from "mobx";
import {IAdmin, IAdvantage, IArticle, ICourse, IFeedback, IInform, INews} from "../types/mainTypes";
import {mockAdvantages, mockArticles, mockCourses, mockFeedbacks, mockInform, mockNews} from "../mock";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import PostService from "../services/PostService";
import CourseService from "../services/CourseService";
import AdvantageService from "../services/AdvantageService";
import InformService from "../services/InformService";
import FeedbackService from "../services/FeedbackService";

export default class DashboardStore {
    courses:ICourse[] = [];
    articles:IArticle[] = [];
    news:INews[] = [];
    advantages:IAdvantage[] = [];
    feedbacks:IFeedback[] = mockFeedbacks;
    inform:IInform=mockInform;

    admin:IAdmin | undefined;

    isAuth:boolean = false;
    isLoading:boolean =  false;

    dashboardContentIndex:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setAdmin(admin:IAdmin | undefined){
        this.admin = admin;
    }

    setAuth(bool:boolean) {
        this.isAuth = bool;
    };

    setLoading(bool:boolean) {
        this.isLoading = bool;
    }

    setDashboardContentIndex(value:number){
        this.dashboardContentIndex = value;
    }

    setAdvantages(advantages:IAdvantage[]){
        this.advantages = advantages;
    }

    removeAdvantage(id:number){
        this.setAdvantages(this.advantages.filter(a=>a.id!==id));
    }

    setArticles(articles:IArticle[]){
        this.articles = articles;
    }

    removeArticle(id:number){
        this.setArticles(this.articles.filter(a=>a.id!==id));
    }

    setCourses(courses:ICourse[]){
        this.courses = courses;
    }

    removeCourse(id:number){
        this.setCourses(this.courses.filter(c=>c.id!==id));
    }

    setNews(news:INews[]){
        this.news = news;
    }

    removeNews(id:number){
        this.setNews(this.news.filter(n=>n.id!==id));
    }

    setFeedback(feedbacks:IFeedback[]){
        this.feedbacks = feedbacks;
    }

    removeFeedBack(id:number){
        this.setFeedback(this.feedbacks.filter(f=>f.id!==id));
    }

    setInform(value:IInform){
        this.inform = value;
    }

    async login(email:string, password:string) {
        this.setLoading(true);
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setAdmin(response.data.admin);
        } catch (e:any) {
            console.log(e.response?.data?.message);
        }finally{
            this.setLoading(false)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setAdmin(undefined);
        } catch (e:any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        console.log('Check auth');
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/admins/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            this.setAdmin(response.data.admin);
            this.setAuth(true);
        } catch (e:any) {
            this.logout();
            console.log(e.response?.data?.message);
        } finally {
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

    async addNews(data:FormData){
        this.setLoading(true);
        try{
            const response = await PostService.createNews(data);
            this.setNews([...this.news,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async updateNews(data:FormData){
        this.setLoading(true);
        try{
            const response = await PostService.updateNews(data);
            this.removeNews(response.data.id);
            this.setNews([...this.news,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async deleteNews(id:number){
        this.setLoading(true);
        try{
            const response = await PostService.delete(id);
            this.removeNews(id);
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

    async addArticle(data:FormData){
        this.setLoading(true);
        try{
            const response = await PostService.createArticle(data);
            this.setArticles([...this.articles,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async updateArticle(data:FormData){
        this.setLoading(true);
        try{
            const response = await PostService.updateArticle(data);
            this.removeArticle(response.data.id);
            this.setArticles([...this.articles,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async deleteArticle(id:number){
        this.setLoading(true);
        try{
            const response = await PostService.delete(id);
            this.removeArticle(id);
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

    async addCourse(data:FormData){
        this.setLoading(true);
        try{
            const response = await CourseService.create(data);
            this.setCourses([...this.courses,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async updateCourse(data:FormData){
        this.setLoading(true);
        try{
            const response = await CourseService.update(data);
            this.removeCourse(response.data.id);
            this.setCourses([...this.courses,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async deleteCourse(id:number){
        this.setLoading(true);
        try{
            const response = await CourseService.delete(id);
            this.removeCourse(id);
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

    async addAdvantage(data:FormData){
        this.setLoading(true);
        try{
            const response = await AdvantageService.create(data);
            this.setAdvantages([...this.advantages,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async updateAdvantage(data:FormData){
        this.setLoading(true);
        try{
            const response = await AdvantageService.update(data);
            this.removeAdvantage(response.data.id);
            this.setAdvantages([...this.advantages,response.data]);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async deleteAdvantage(id:number){
        this.setLoading(true);
        try{
            const response = await AdvantageService.delete(id);
            this.removeAdvantage(id);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
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

    async updateInform(data:FormData){
        this.setLoading(true);
        try{
            const response = await InformService.update(data);
            this.setInform(response.data);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

    async getFeedbacks(){
        this.setLoading(true);
        try{
            const response = await FeedbackService.getAll();
            this.setFeedback(response.data);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }

    }

    async deleteFeedback(id:number){
        this.setLoading(true);
        try{
            const response = await FeedbackService.delete(id);
            this.removeFeedBack(id);
        }
        catch (e:any) {
            console.log(e.response?.data?.message);
        }finally {
            this.setLoading(false);
        }
    }

}