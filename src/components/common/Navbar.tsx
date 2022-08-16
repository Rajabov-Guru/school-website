import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {FC} from "react";
import {Link} from "react-router-dom";
import {paths} from "../../routing/routes";


const pages = [
    {name:"Новости",path:'/news'},
    {name:"Статьи",path:'/articles'},
    {name:"Контакты",path:"/contacts"},
];

interface INavbar{
    absoluteNavbar:boolean;
}

const Navbar:FC<INavbar> = ({absoluteNavbar}) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);

    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position={absoluteNavbar?"absolute":"static"} color={absoluteNavbar?"transparent":"primary"}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Link to={paths.LANDING_ROUTE}>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'black' }} />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={page.path} to={page.path}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </Link>

                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color:'black' }}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Robotic
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page.path} to={page.path}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 1, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </Link>

                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Link to={paths.ADMIN_ROUTE}>
                            <Button onClick={handleCloseNavMenu} sx={{ my: 1, color: 'white', display: 'block' }}>
                                Вход
                            </Button>
                        </Link>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;