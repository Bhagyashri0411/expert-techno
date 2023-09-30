import { Link } from "react-router-dom";
import "./contant.css";

export const Contactsection = ({ HandleOpen }) => {
    return (
        <>
            <Link className="home" to="/" onClick={() => HandleOpen('home')}> HOME</Link>
            <div className="mainbg">
                <div >
                    <form className="form-card">
                        <div className="discordLogo-2A4X97" />
                        <div className="mainpagecard">
                            <div className="w-100">

                                <div className="smalltext">
                                    Get in Toucha
                                </div>
                                <h1 className="bgtext"
                                >Expert Digital Web</h1>

                            </div>
                            <div className="block-main">
                                <div className="d-flex ">
                                    <div className="col-md-6 pe-1">

                                        <h1 className="lable-name">First Name</h1>
                                        <div className="mb-3">
                                            <div className="inputblock">
                                                <input
                                                    name="global_name" type="text"
                                                    placeholder="What should everyone call you?" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ps-1">

                                        <h1 className="lable-name">last Name</h1>
                                        <div className="mb-3">
                                            <div className="inputblock">
                                                <input
                                                    name="global_name" type="text"
                                                    placeholder="What should everyone call you?" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="col-md-6 pe-1">

                                        <h1 className="lable-name">Company email</h1>
                                        <div className="mb-3">
                                            <div className="inputblock">
                                                <input
                                                    name="global_name" type="text"
                                                    placeholder="What should everyone call you?" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ps-1 ">

                                        <h1 className="lable-name">Phone number</h1>
                                        <div className="mb-3">
                                            <div className="inputblock">
                                                <input
                                                    name="global_name" type="text"
                                                    placeholder="What should everyone call you?" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="d-flex flex-column ">

                                    <h1 className="lable-name">Company size</h1>
                                    <div className="mb-3">
                                        <div className="inputblock">
                                            <input
                                                name="global_name" type="text"
                                                placeholder="What should everyone call you?" />
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex flex-column ">

                                    <h1 className="lable-name">what would you like to discuss</h1>
                                    <div className="mb-3">
                                        <div className="inputblock">
                                            <textarea cols={3} rows={3} placeholder="Tell us about your team and provide some details about a project or process." />
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-2">
                                    <button type="submit" className="button-style">
                                        <div className="contents-3NembX">Continue</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}