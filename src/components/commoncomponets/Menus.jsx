import { Link } from "react-router-dom";

export const Menus = ({ close }) => (
    <>
        <div className="clb-popup hamburger-nav type3 visible"><div className="close-bar -left-flex">
            <button className="icon-button -light" onClick={close}>
                <i className="icon">
                    <svg className="default" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                    </svg>

                </i>
            </button>
        </div>
            <div className="container page-container">
                <div className="col-md-8 hamburger-nav-holder">
                    <ul id="secondary-menu" className="menu">
                        <li className="mega-menu-item nav-item">
                            <Link to="/aboutus" className="menu-link">
                                <span>About</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item nav-item">
                            <a href="/showcase" className="menu-link">
                                <span>Showcase</span>
                            </a>
                        </li>
                        {/* <li className="mega-menu-item nav-item">
                            <a href="#" className="menu-link">
                                <span>Memoir    </span>
                            </a>
                        </li> */}
                        <li className="mega-menu-item nav-item">
                            <a href="#" className="menu-link">
                                <span>Careers</span>
                            </a>
                        </li>
                        <li className="mega-menu-item nav-item">
                            <a href="#" className="menu-link">
                                <span>Testimonials</span>
                            </a>
                        </li>
                        {/* <li className="mega-menu-item nav-item">
                            <a href="#" className="menu-link">
                                <span>Reach</span>
                            </a>
                        </li> */}
                    </ul>
                </div><div className="hamburger-nav-details">
                    <div className="details-column">
                        <b>Get In Touch</b><br />
                        <a href="mailto:hello@kangaroo.agency">
                            hello@kangaroo.agency
                        </a>
                        <br />
                        <a href="tel:+918128286121"> Ph: +91 81282 86121</a>
                    </div>
                    <div className="details-column">
                        <b>Career Inquiries</b>
                        <br />
                        <a href="mailto:careers@kangaroo.agency"> careers@kangaroo.agency</a>
                        <br />
                        <a href="/careers">Careers 🡽</a>
                    </div>
                </div>
            </div>
        </div>
    </>
)