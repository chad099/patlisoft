import React from 'react';
import logo from '../styles/images/logo.png';
import Menu from './common/Menu';


const menus  = [
    {
        title: "Home",
        link:"/"
    },
    {
        title: "Services",
        link:"/services"
    },
    {
        title: "Project",
        link:"/project"
    },
    {
        title: "Team",
        link:"/team"
    },
    {
        title: "Contact",
        link:"/contact"
    }
];

const MainMenu = () => {
    return (
        <div>
            <header className="banner">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width="200px" alt="logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                              {menus && menus.map((i, key) => <Menu key={key} menu={i}/> )}
                             </ul> 
                        </div>
                    </nav>
                    </div>
            </header>
        </div>
    );
};



export default MainMenu;
