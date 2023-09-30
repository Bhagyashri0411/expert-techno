import React from "react";
import './Service.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import vid from "../../../assets/vid.mp4"
import banner8 from "../../../assets/banner8.jpg"
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import DiamondIcon from '@mui/icons-material/Diamond';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const Servicefirstsection = () => {

    return (
        <>
            <section className="page-banner-area bgs-cover py-135 rpy-100 " >
                <div className="container">
                    <div className="banner-inner text-center">
                        <h1 className="page-title wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Services</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <li className="breadcrumb-item"><a href="/home">home</a></li>&nbsp;<KeyboardArrowRightIcon />&nbsp;
                                <li className="breadcrumb-item active">Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <div id="content" className="site-content">
                <div className="ast-container">
                    <div >
                        <section className="elementor-section" >
                            <div className="container">
                                <div className="row" >
                                    <div className="p-2">
                                        <div className="elementor-widget-container">
                                            <h2 className="mb-3">Our Services</h2>
                                            <p>
                                                We are a team of 45 members. Besides
                                                selling themes,
                                                we provide custom services for our clients. These services are very helpful for the agencies or customers who need to build custom websites/need to modify our theme or any 3rd party products. It is very hard to find trustworthy developers nowadays. To reduce the hassles of our customers, we provide custom services.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="elementor-section ">
                            <div className="container">
                                <div className="row">
                                    <section className="col-md-6 " >
                                        <div className=" elementor-element-card mb-4">
                                            <div className="elementor-element">
                                                <h2 >
                                                    WordPress Services
                                                </h2>
                                                <p >The services include PSD/HTML to WordPress, WordPress theme and plugin customization, WordPress website setup, migration, etc.</p> </div>
                                            <img decoding="async" width={57} height={23} src="https://hasthemes.com/wp-content/uploads/2020/02/arro_left.png" alt="" />


                                        </div>
                                        <div className="elementor-element-card " >
                                            <div className="elementor-element">
                                                <h2 >
                                                    Shopify Services
                                                </h2>
                                                <p >
                                                    If you want to build or customize a Shopify store with all the necessary functionalities then this service is perfect for you.
                                                </p> </div>
                                            <img decoding="async" width={57} height={23} src="https://hasthemes.com/wp-content/uploads/2020/02/arro_left.png" alt="" />

                                        </div>
                                    </section>

                                    <section className="col-md-6">
                                        <div className=" elementor-element-card mb-4">
                                            <div className="elementor-element">
                                                <h2 >
                                                    Graphic Design Services
                                                </h2>
                                                <p >
                                                    We help businesses to design logos, banner, business cards, flyers, brochures, posters, calendar and many other things to promote their business.
                                                </p>
                                            </div>
                                            <img decoding="async" width={57} height={23} src="https://hasthemes.com/wp-content/uploads/2020/02/arro_left.png" alt="" />

                                        </div>
                                        <div className=" elementor-element-card">
                                        <div className="elementor-element">
                                                <h2 >
                                                        HTML Services
                                                </h2>
                                                <p >
                                                       We produce a broad range of HTML templates for diverse types of websites. These web templates come in handy for individuals, companies, or business organizations.
                                                </p>
                                            </div>
                                            <img decoding="async" width={57} height={23} src="https://hasthemes.com/wp-content/uploads/2020/02/arro_left.png" alt="" />

                                           
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
                <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <span className="sub-title mb-15">Working Process</span><br></br>
                    <h1 className="industry mt-3">Industry Best Practices to the Core</h1>
                </div>
                <div className="work-process-line text-center">
                    <img src={banner8} alt="line" />
                </div>
                <div className="container">
                    <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
                        <div className="col">
                            <div className="work-process-item mt-40 wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="number">01</div>
                                <div className="content">
                                    <h4 className="contenthover">Discover</h4>
                                    <p className="para">We emphasize planning get everythin documente nothing assumption</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="work-process-item mt-10 wow fadeInDown delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInDown' }}>
                                <div className="number">02</div>
                                <div className="content">
                                    <h4>Planning</h4>
                                    <p className="para">Our design approach is to simplify. We embrace  creating something.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="work-process-item mt-40 wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="number">03</div>
                                <div className="content">
                                    <h4>Design &amp; Dev</h4>
                                    <p className="para">At this step, we cater to requirement backed web services developmenc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="work-process-item wow fadeInDown delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInDown' }}>
                                <div className="number">04</div>
                                <div className="content">
                                    <h4>Testing</h4>
                                    <p className="para">On the other denounce with righteou indignation dislike beguile demore</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="work-process-item mt-50 wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="number">05</div>
                                <div className="content">
                                    <h4>Project Deliver</h4>
                                    <p className="para">We denounce righteous indignation and dislike men who beguiled</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="services-area bgc-lighter pt-75 pb-10 rel z-1">
                <div className="container">
                    <div className="row medium-gap">
                        <div className="col-xl-4 col-md-6">
                            <div className="section-title mb-60 wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <span className="sub-title mb-15 setalign">Latest Services</span><br></br>
                                <h1 className="setheight">We Provide Best IT Services</h1>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-two-item wow fadeInUp delay-0-4s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="icon">
                                    <Diversity1Icon className="flaticon-networking" style={{ height: '55px' }}></Diversity1Icon>
                                </div>
                                <div className="content">
                                    <h4><a href="service-details.html">Digital Consulting</a></h4>
                                    <p className="para">On the other hand we denounce withteous indignation and dislike men who beguilede demoralized by the charms pleasure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-two-item wow fadeInUp delay-0-6s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="icon">
                                    <ImportantDevicesIcon className="flaticon-coding" style={{ height: '55px' }}></ImportantDevicesIcon>
                                </div>
                                <div className="content">
                                    <h4><a href="service-details.html">Design &amp; Development</a></h4>
                                    <p className="para">On the other hand we denounce withteous indignation and dislike men who beguilede demoralized by the charms pleasure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-two-item wow fadeInUp delay-0-3s" style={{ visibility: 'visible', animationName: 'none' }}>
                                <div className="icon">
                                    <PhonelinkIcon className="flaticon-app-development" style={{ height: '55px' }}></PhonelinkIcon>
                                </div>
                                <div className="content">
                                    <h4><a href="service-details.html">Mobile App Solutions</a></h4>
                                    <p className="para">On the other hand we denounce withteous indignation and dislike men who beguilede demoralized by the charms pleasure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-two-item wow fadeInUp delay-0-5s" style={{ visibility: 'visible', animationName: 'none' }}>
                                <div className="icon">
                                    <DiamondIcon className="flaticon-logo" style={{ height: '55px' }}></DiamondIcon>
                                </div>
                                <div className="content">
                                    <h4><a href="service-details.html">UX/UI Design Strategy</a></h4>
                                    <p className="para">On the other hand we denounce withteous indignation and dislike men who beguilede demoralized by the charms pleasure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-two-item wow fadeInUp delay-0-7s" style={{ visibility: 'visible', animationName: 'none' }}>
                                <div className="icon">
                                    <SignalCellularAltIcon className="flaticon-seo" style={{ height: '55px' }}></SignalCellularAltIcon>
                                </div>
                                <div className="content">
                                    <h4><a href="service-details.html">SEO Optimization</a></h4>
                                    <p className="para">On the other hand we denounce withteous indignation and dislike men who beguilede demoralized by the charms pleasure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br></br>

            <section className="satisfaction-area-two mt-5 py-100 rpy-70 rel z-1 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                <div className="section-title mb-15">
                                    <span className="sub-title mb-15 setfloat">Guaranteed Customer Satisfaction</span><br></br>
                                    <h1 className="setheight">Ideate, Design And Fuel Business Growth</h1>
                                </div>
                                <p className="para">With over 20 years of experience and 850+ employees board, Iflexion  serves medium-sized and large companies globally. Profound knowledge coupled with business understanding is what allows us to create unique solutions that power enterprises, their employees.</p>
                                <div className="row pt-15">
                                    <div className="col-sm-6">
                                        <div className="service-item style-two">
                                            <div className="icon">
                                                <VolunteerActivismIcon className="flaticon-trust" style={{ height: '55px' }}></VolunteerActivismIcon>
                                            </div>
                                            <h4><a href="service-details.html">Best Trusted Partner</a></h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="service-item style-two">
                                            <div className="icon">
                                                <PrecisionManufacturingIcon className="flaticon-technical-support" style={{ height: '55px' }}></PrecisionManufacturingIcon>
                                            </div>
                                            <h4><a href="service-details.html">24/7 Tehnical Support</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <video autoPlay loop muted src={vid} />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Servicefirstsection;