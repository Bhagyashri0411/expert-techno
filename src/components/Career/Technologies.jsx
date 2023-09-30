import android from "../../assets/icons/android.jpg";
import python from "../../assets/icons/python.png";

import react from "../../assets/icons/react.png";
import redux from "../../assets/icons/redux.png";
import reactnative from "../../assets/icons/react-native.png";
import angular from "../../assets/icons/angular.png";
import css from "../../assets/icons/css.png"
import nodejs from "../../assets/icons/nodejs.png";
import javascript from "../../assets/icons/javascript.png";



export const Technologies = () => {

    const data = [
        {
            icon: android,
            name: "Android Studio"
        },
        {
            icon: python,
            name: "Python",
        },
        {
            icon: nodejs,
            name: "Node js"
        },
        {
            icon: javascript,
            name: "Javascript"
        },
        {
            icon: react,
            name: "React js"
        },
        {
            icon: redux,
            name: "Redux"
        },
        {
            icon: reactnative,
            name: "React Native"
        },
        {
            icon: angular,
            name: "Angular js"
        },
        {
            icon: css,
            name: "css"
        }
    ]
    return (
        <>
        <div className="homethirdpage my-5">
                <div className="container">
                    <div className="alcontainer">
                        <div className="topheadingcontainer">
                            <h3 className="aglint_ai-header">
                            Technologies we work on!
                                </h3>
                            <p className="aglint_ai-desc">
                            Turn your ideas into reality through qualified and scalable digital products.
                             </p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="features" className="features-area">
                <div className="container">

                    <div className="row justify-content-center">
                        {data.map((item, key) => (

                            <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6" key={key}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <img src={item.icon} alt="icon" />
                                    </div>
                                    <h3 >{item.name}</h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="lines">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
        </>
    )
}