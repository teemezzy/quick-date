import React, { useState } from "react";
import "./Status.css";
import StatusViewModal from '../../components/StatusViewModal/StatusViewModal';

// all status images below here
import add_status from "../../assets/images/add-status.svg";
import pretty from "../../assets/images/pretty.png";
import valery from "../../assets/images/valerie.png";
import roman from "../../assets/images/roman.png";
import nice from "../../assets/images/nice.png";
import escstarcy from "../../assets/images/escstarcy.png";
import celine from "../../assets/images/celine.png";
import story from "../../assets/images/story.png";
import chev1 from "../../assets/images/chevleft.svg";
import chev2 from "../../assets/images/chevright.svg";
import hiw from "../../assets/images/hiw_main.svg";

const Status = () => {
    let statuses = [
        { image: pretty, id: 1, rate: true, verified: true, time_posted: '7mins ago', username: 'Ecstasy', },
        { image: valery, id: 1, time_posted: '7mins ago', username: 'Ecstasy', rate: true, verified: true },
        { image: roman, id: 1, rate: true, verified: true, time_posted: '7mins ago', username: 'Ecstasy', },
        { image: nice, id: 1, rate: true, verified: true, time_posted: '7mins ago', username: 'Ecstasy', },
        { image: escstarcy, id: 1, rate: true, verified: true, time_posted: '7mins ago', username: 'Ecstasy', },
        { image: celine, id: 1, rate: true, verified: true, time_posted: '7mins ago', username: 'Ecstasy', },
        { image: story, id: 1, rate: true, verified: true, time_posted: '7mins ago', username: 'Ecstasy', },
        { image: hiw, id: 1, rate: true, verified: true, time_posted: '7mins ago', username: 'Ecstasy', }
    ]
    const [showStatusViewModal, setShowStatusViewModal] = useState(false);
    const [statusToBeViewed, setStatusToBeViewed] = useState();

    const handleStatusClick = (image) => {
        setStatusToBeViewed(image);
        setShowStatusViewModal(true)
    }
    return (
        <div className="story-section">
            <img className="chevright" alt="left" src={chev1} />
            <div className="my-status">
                <img className="pretty my-profile-status" alt="friend" src={statuses[1]['image']} />
                <img className="add-status" src={add_status} alt="add status" />
            </div>
            {statuses.map((image, id) => <div key={id}><img onClick={() => handleStatusClick(image)} className="pretty" alt="friend" src={image.image} /></div>)}
            <img className="chevright" alt="right" src={chev2} />
            {
                showStatusViewModal ?
                    <StatusViewModal statusToBeViewed={statusToBeViewed} setShowStatusViewModal={() => setShowStatusViewModal(false)} />
                    : null
            }
        </div>
    )
}

export default Status;