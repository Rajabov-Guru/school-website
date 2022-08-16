import React, {FC} from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {paths} from "../../../routing/routes";

const listItems = [
    {id:0, icon:<HomeIcon sx={{ color: 'white'}}/>, title:"Главная"},
    {id:1, icon:<NewspaperIcon sx={{ color: 'white'}}/>, title:"Новости"},
    {id:2, icon:<ArticleIcon sx={{ color: 'white'}}/>, title:"Статьи"},
    {id:3, icon:<SchoolIcon sx={{ color: 'white'}}/>, title:"Курсы"},
    {id:4, icon:<StarsIcon sx={{ color: 'white'}}/>, title:"Преимущества"},
    {id:5, icon:<SettingsIcon sx={{ color: 'white'}}/>, title:"Общее"}
];

interface ISidebar{
    switchContent:(id:number)=>void;
    logoutHandler:()=>void;
}


const Sidebar:FC<ISidebar> = ({switchContent, logoutHandler}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        switchContent(index);
    };


    return (
        <div className={'sidebar'}>
            <div className={'sidebar__menu'}>
                <List component="nav" aria-label="main mailbox folders" sx={{width:250}}>

                    {listItems.map(x=>
                        <ListItemButton
                            key={x.id}
                            selected={selectedIndex === x.id}
                            onClick={(event) => handleListItemClick(event, x.id)}
                        >
                            <ListItemIcon>
                                {x.icon}
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'white'}} primary={x.title} />
                        </ListItemButton>
                    )}

                </List>
            </div>
            <List>
                <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={logoutHandler}
                >
                    <ListItemIcon>
                        <LogoutIcon sx={{ color: 'white'}} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'white'}} primary="Выход" />
                </ListItemButton>
            </List>
        </div>
    );
};

export default Sidebar;