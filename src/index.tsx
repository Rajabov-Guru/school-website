import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DashboardStore from "./store/DashboardStore";
import MainStore from "./store/MainStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const dashboardStore = new DashboardStore();
const mainStore = new MainStore();

export const Context = createContext({
    dashboardStore,
    mainStore,
});

root.render(
    <Context.Provider value={{dashboardStore, mainStore}}>
        <App />
    </Context.Provider>

);
