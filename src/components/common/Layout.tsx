import React, {FC} from 'react';
import Navbar from "./Navbar";
import Footer from "../../pages/Landing/sections/Footer";

interface ILayout{
    children?:React.ReactNode;
    isLanding:boolean;
}

const Layout:FC<ILayout> = ({children,isLanding}) => {
    return (
        <>
            <Navbar absoluteNavbar={isLanding}/>
            {isLanding?children:
                <div className={'content'}>
                    {children}
                </div>
            }
            <Footer/>
        </>
    );
};

export default Layout;