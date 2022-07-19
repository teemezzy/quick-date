import React from "react";
import gallery from "../../assets/images/gallery-option.svg";
import photo from "../../assets/images/take-file.svg";
import file from "../../assets/images/file-options.svg";
import "./MediaOptions.css";

const MediaOptions =()=>{
    return (
    <div className="media-options-wrapper">
        <div className="item add-bb">
            <span className="title">Picture Gallery</span>
            <img src={gallery} alt="gallery" />
        </div>
        <div className="item add-bb">
            <span className="title">Choose file</span>
            <img src={photo} alt="take" />
        </div>
        <div className="item">
            <span className="title">Choose file</span>
            <img src={file} alt="file" />
        </div>
    </div>
    )
}

export default MediaOptions;