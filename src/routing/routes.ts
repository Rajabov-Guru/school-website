import Landing from "../pages/Landing/Landing";
import Articles from "../pages/Articles/Articles";
import News from "../pages/News/News";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

export const paths = {
    LANDING_ROUTE : '/',
    ARTICLES_ROUTE : '/articles',
    NEWS_ROUTE  : '/news',
    LOGIN_ROUTE: '/login',
    ADMIN_ROUTE : '/admin',
}


export const routes = [
    {
        path: paths.LANDING_ROUTE,
        Component: Landing
    },
    {
        path: paths.ARTICLES_ROUTE,
        Component: Articles
    },
    {
        path: paths.NEWS_ROUTE,
        Component: News
    },
    {
        path: paths.LOGIN_ROUTE,
        Component: Login
    },
    {
        path: paths.ADMIN_ROUTE,
        Component: Dashboard
    },
]