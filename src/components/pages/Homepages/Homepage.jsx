import "./home.css";
import homevideo from "../../../assets/background.mp4";
import { HomeSecondpage } from "./HomeSecondpage";
import HomefirstSection from "./HomefirstSection";
import { HomethirdSection } from "./HomethirdSection";
import { HomeforthSection } from "./HomeforthSection";

export const Homepage = () => {
    return (
        <>
            <div className="mainhomefirs" >
                {/* <video src={homevideo} autoPlay
                    loop
                    muted /> */}
                <div className="col-md-10 mx-auto page-container">

                    <div className="col-md-5">
                        <div className="column_inner">

                            <div className="subheading" >
                                <h6 className="title">
                                    We're Thinkers, <br />
                                    We're Innovators, <br />
                                    We're Marketers.
                                </h6>
                            </div>

                            <div className="aos-animate" data-aos="fade-up" data-aos-delay={100}>
                                <h1 className="title">
                                    Discover the
                                    <br />
                                    Future with
                                    <div className="heading_style">
                                        Expert digital Web
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <HomefirstSection />
            <HomeSecondpage />

            <HomethirdSection/>
            {/* <HomeforthSection/> */}
        </>
    )
}

export default Homepage;