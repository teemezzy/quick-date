import React from "react";
import hiw_profile from "../../assets/images/hiw_profile.svg";
import hiw_profile_two from "../../assets/images/hiw_profile_two.png";
import hiw_main_img from "../../assets/images/hiw_main.svg";
import hiw_sub_two from "../../assets/images/three-girls.svg";
import chat_img from "../../assets/images/hiw_chat.png";
import hiw_profile_three from "../../assets/images/chat-on.svg";

import "./HowItWorks.css";

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <div className="bg-white justify-content-center align-items-center text-center pt-4 d-flex flex-column">
                <h2 className="m-4">How It Works</h2>
                <p className="your-expe hiw-subtext">
                    Your experience here is of the ultimate priority. 
                    Quickdate has decided to make it a simple yet memorable one for you. 
                </p>
            </div>
            <div className="mb-4">
                <div className="d-flex hiw-image-container justify-content-between align">
                    <div className="item-1 d-flex justify-content-center align-items-start pt-4">
                        <img className="m-2" src={hiw_profile} alt="profile" />
                        <div className="m-2">
                            <h2>Set up profile details</h2>
                            <p className="our-communi">
                                Our community is filled with unique individuals such as yourself.
                                Therefore, the need for you to provide neccessary information about yourself.
                            </p>
                        </div>
                    </div>
                    <div className="hiw-image">
                        <div><img src={hiw_main_img} className="rounded" alt="main" /></div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="hiw_sub_two d-flex hiw-image-container justify-content-between">
                    <div className="hiw-image ">
                        <div><img src={hiw_sub_two} className="" alt="main" /></div>
                    </div>
                    <div className="d-flex you-expl community-item-2 justify-content-center align-items-start mt-4">
                        <img className="m-2" src={hiw_profile_two} alt="profile" />
                        <div className="mt-2">
                            <h3>Explore our commnity</h3>
                            <p className="i-f-s">
                                You explore our community to meet people and create connections 
                                that will become something magical to say the least. This feature 
                                allows you to meet people and choose those you want to meet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="d-flex hiw-image-container justify-content-between align">
                    <div className="d-flex community-item-2 justify-content-center align-items-start pt-4">
                        <img className="m-2" src={hiw_profile_two} alt="profile" />
                        <div className="m-2 w-75">
                            <h3>Go On Date</h3>
                            <p className="our-plat">
                                Our platform allows you to post a date request to know people 
                                that might be interested in going for drink, dinner or downtown. 
                                You can talk more on the details in the chat.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="hiw-chat_img"><img src={chat_img} className="on-date" alt="main" /></div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="d-flex hiw_sub_two hiw-image-container justify-content-between align">
                    <div>
                        <div className="hiw-chat_img"><img src={hiw_profile_three} className="on-date" alt="main" /></div>
                    </div>
                    <div className="d-flex community-item-2 justify-content-center align-items-start pt-4">
                        <div className="m-2">
                            <h3>Chat with people</h3>
                            <p>
                                You also get to chat with other members of the community.<br />
                                You get to talk about secrets and desires. You can also share photos <br /> and videos with other members of Quickdate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;