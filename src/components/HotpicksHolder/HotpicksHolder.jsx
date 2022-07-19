import React from "react";
import "./HotpicksHolder.css";
// hook images
import verified from "../../assets/images/verified.svg";
import rate from "../../assets/images/rating.svg";
import cam from "../../assets/images/camera.svg";
import vidcam from "../../assets/images/vidcam.svg";
import { useNavigate } from "react-router-dom";

const HotpicksHolder = ({ userData }) => {
    const navigate = useNavigate();
    return (
        <div>
            <section className="hotpicksimages">
                <div className="h-imgs">
                    <img className="hook1" src={userData?.image} alt="fancy" onClick={()=> navigate('/profile')} />
                    {userData?.rate ? <img className="ratings" src={rate} alt="rating.svg" /> : null}

                </div>
                <div className="hooksfoot">
                    <span className="hpname">Elena</span>
                    {userData?.verified ? <small><img src={verified} alt="verified.svg" /></small> : null}
                    <span className="cam-vidcam">
                        <img className="cam" src={cam} alt="camera.svg" />
                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                    </span>
                </div>
            </section>
        </div>
    )
}

export default HotpicksHolder;