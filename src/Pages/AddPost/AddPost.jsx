import React, { useEffect, useState } from "react";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import MediaOptions from "../../components/MediaOptions/MediaOptions";
import PriceOption from "../../components/PriceOption/PriceOption";

import media from "../../assets/images/addmedia.svg";
import price from "../../assets/images/setprice.svg";
// upload complete image 
import upload from '../../assets/images/uploaded.png';
import cancle from '../../assets/images/cancle.svg'

// css file here
import './AddPost.css';

// member section here
import SidebarMobile from "../../components/Sidebar/SidebarMobile";
import { useLocation } from "react-router-dom";

const AddPost = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    const [showMediaOptions, setShowMediaOptions] = useState(false);
    const [showPriceOption, setShowPriceOption] = useState(false);
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex">
                <Sidebar activeLink={'post'} />
                <div className="container">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-3">
                                <h3><b>Add Post</b></h3>
                            </div>
                            <div className="col-sm-9"></div>
                        </div>

                        <div className="add-post-top">
                            <div className="col-sm-1"></div>
                            <div className="btn-container d-flex justify-content-between align-items-center">
                                <div><button className="cancel">Cancel</button></div>
                                <div>
                                    <button className="draft">Drafts</button>
                                    <button className="posts">Post</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-1"></div>
                            <div>
                                <div>
                                    <textarea className="composenewpost" placeholder="Compose new post" name="text" cols="30" rows="10"></textarea>
                                </div>
                                <div className="medias">
                                    <div className="media-holder">
                                        <img className="media" onClick={()=> setShowPriceOption(false)&setShowMediaOptions(!showMediaOptions)} src={media} alt="add media" />
                                        <div className="options">
                                            {showMediaOptions? <MediaOptions /> : null}
                                        </div>
                                    </div>
                                    <div className="media-holder">
                                        <img className="price" onClick={()=> setShowMediaOptions(false)&setShowPriceOption(!showPriceOption)} src={price} alt="add media" />
                                        <div className="options">
                                            {showPriceOption? <PriceOption /> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="upload-complete">
                            <div>
                                <img className="uploadImgComplete" src={upload} alt="uploaded" />
                                <span className="styled-span">upload complete <img className="cancle" src={cancle} alt="" /></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <SidebarMobile />
        </div>
    )
}

export default AddPost;