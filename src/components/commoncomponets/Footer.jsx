import "./footer.css";
import logo from "../../assets/Logo/logo-transparent-png.png"
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <>
            <div className="footer-content-area mt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="footer-copywrite-info">
                                {/* Copywrite */}
                                <div className="copywrite_text" >
                                    <div className="footer-logo">
                                        <Link to="/"><img src={logo} alt="logo" />  </Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.</p>
                                </div>
                                {/* Social Icon */}
                                <div className="footer-social-info" >
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                    <a href="#"> <i className="fa fa-twitter" aria-hidden="true" /></a>
                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="contact_info_area d-sm-flex justify-content-center">
                                {/* Content Info */}
                                <div className="contact_info" >
                                    <h5>PAGES</h5>
                                    <a href><p>About us</p></a>
                                    <a href><p>Services </p></a>
                                    <a href><p>Featurs</p></a>
                                    <a href><p>Careers</p></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-lg-4 col-md-6 ">
                            <div className="contact_info_area d-sm-flex justify-content-center">
                                {/* Content Info */}
                                <div className="contact_info " >
                                    <h5>CONTACT US</h5>
                                    <p>address</p>
                                    <p>+33 6 40 56 53 74</p>
                                    <p>baskaranephilip@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}