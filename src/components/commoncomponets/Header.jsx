import { useState } from "react";
import "./Header.css";
import { Menus } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo-transparent-png.png"

export const Header = ({ HandleOpen }) => {

    const [open, setOpen] = useState(false);

    const HandleOpenBox = () => {
        setOpen(true);
    }

    const HandleCloseBox = () => {
        setOpen(false);
    }
    return (
        <>
            <header id="masthead" className="header header-3 header-dynamic-typo both-types">
                <div className="header-wrap">
                    <div className="header-wrap-inner">
                        <div className="left-part">
                            <div className="desktop-hamburger -left">
                                <button className="icon-button hamburger" onClick={HandleOpenBox}>
                                    <i className="icon" />
                                </button>
                            </div>

                            <div className="branding">
                                <Link to="/">
                                    <img src={logo} alt="not found"/>
                                </Link>
                            </div>

                        </div>

                        <div className="right-part right">
                            <nav className="nav with-counters with-mobile-menu visible">
                                <div className="mobile-overlay menu-mobile-overlay">
                                    <div className="holder">
                                        <div id="mega-menu-wrap" className="nav-container">
                                            <ul id="menu-primary" className="menu">
                                                <li className="mega-menu-item nav-item ">
                                                    <Link to="/" className="menu-link ">
                                                        <span>
                                                            Home
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className="mega-menu-item nav-item ">
                                                    <Link to="/aboutus" className="menu-link ">
                                                        <span>About</span>
                                                    </Link>
                                                </li>

                                                <li className="mega-menu-item nav-item ">
                                                    <Link to="/services" className="menu-link ">
                                                        <span>Services
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className="mega-menu-item nav-item menu-item-depth-0 ">
                                                    <Link to="/career" className="menu-link " >
                                                        <span>Careers
                                                        </span>
                                                    </Link>
                                                </li>
                                                {/* <li className="mega-menu-item nav-item menu-item-depth-0 ">
                                                    <Link to="/" className="menu-link ">
                                                        <span>Reach
                                                        </span>
                                                    </Link>
                                                </li> */}
                                            </ul>

                                            <ul id="mobile-menu" className="mobile-menu menu">
                                                <li className="mega-menu-item nav-item menu-item-depth-0 ">
                                                    <Link to="/" className="menu-link ">
                                                        <span>About
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className="mega-menu-item nav-item ">
                                                    <Link to="/" className="menu-link ">
                                                        <span>Showcase
                                                        </span>
                                                    </Link>
                                                </li>
                                                {/* <li className="mega-menu-item nav-item ">
                                                    <Link to="/" className="menu-link ">
                                                        <span>Memoir
                                                        </span>
                                                    </Link>
                                                </li> */}
                                                <li className="mega-menu-item nav-item ">
                                                    <Link to="/" className="menu-link -undash main-menu-link item-title">
                                                        <span>Careers
                                                        </span>
                                                    </Link>
                                                </li>
                                                {/* <li className="mega-menu-item nav-item ">
                                                    <Link to="/" className="menu-link -undash main-menu-link item-title">
                                                        <span>Reach
                                                        </span>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <ul className="menu-optional ">

                                <li>
                                    <Link to="/contact" className="button -small btn-optional" onClick={()=>HandleOpen('contact')}>
                                        Let's Connect
                                    </Link>
                                </li>
                            </ul>
                            <div className="close-menu" /></div>
                    </div>
                </div>
            </header>
            {open ? <Menus close={HandleCloseBox} /> : ''}
        </>
    )
}