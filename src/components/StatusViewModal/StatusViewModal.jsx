import React, { useEffect, useState } from "react";
import "./StatusViewModal.css";
import BlockUserModal from "../../components/BlockUserModal/BlockUserModal";
import ReportUserModal from "../../components/ReportUserModal/ReportUserModal";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import close_btn from "../../assets/images/close-btn.svg";
import verified from "../../assets/images/status-verified.svg";
import more_options from "../../assets/images/more-options.svg";
import report_user from "../../assets/images/report-user.svg";
import flag_user from "../../assets/images/flag-user.svg";
import block_user from "../../assets/images/block-user.svg";
import { useNavigate } from "react-router-dom";

const StatusViewModal = ({statusToBeViewed, setShowStatusViewModal}) => {
    useEffect(()=>{
        const timeout = setTimeout(setShowStatusViewModal, 10000);
        return ()=>{
            clearTimeout(timeout);
        }
    },[setShowStatusViewModal])
    const navigate = useNavigate()
    const [showTray, setShowTray] = useState(false);
    const [verb, setVerb] = useState('');
    const [openBlockModal, setOpenBlockModal] = useState(false);
    const [openReportModal, setOpenReportModal] = useState(false);
    const [openSuccesModal, setOpenSuccessModal] =useState(false);

    const handleReportOrBlockUser = (request)=>{
        if(request === 'block'){
            setShowTray(false);
            setOpenBlockModal(true);
        }else{
            setShowTray(false);
            setOpenReportModal(true);
        }
    }
    const reportAction =()=>{
        setOpenReportModal(false);
        setVerb('reported');
        setOpenSuccessModal(true);
    }
    const blockAction =(action)=>{
        console.log(action.target.id);
        setOpenBlockModal(false);
        setVerb('blocked');
        setOpenSuccessModal(true);
    }
    const gotoUserProfile =()=> {navigate(`/user/${statusToBeViewed.username}`)}
    return (
        <div className="modal-container">
            <div className="item-one">
                <div className="bar">
                    <div className="in"></div>
                </div>
                <div className="view-options">
                    <img src={more_options} className="item" onClick={()=>setShowTray(true)} alt="more options" />
                    <img src={close_btn} className="item" alt="close" onClick={setShowStatusViewModal} />
                    {showTray?
                    <div className="viewMore-action">
                        <div className="text">
                            <p onClick={()=> handleReportOrBlockUser('report')}><img src={flag_user} alt="flag user" /> Report</p>
                            <p onClick={()=> handleReportOrBlockUser('block')}><img src={block_user} alt="block user" /> Block</p>
                        </div>
                        <img src={report_user} alt="report" className="report-tray" />
                    </div> : null
                    }
                </div>
                <div className="userprofile">
                    <img src={statusToBeViewed.image} className="user-head" alt="status" onClick={gotoUserProfile} />
                    <div>
                        <p>{statusToBeViewed.username} <img src={verified} alt="user verified" /></p>
                        <p>{statusToBeViewed.time_posted}</p>
                    </div>
                    <div className="main-status"><img src={statusToBeViewed.image} alt="main-status" /></div>
                </div>
            </div>
            {openBlockModal? <BlockUserModal username={statusToBeViewed.username} blockAction={()=>blockAction} setOpenReportModal={()=>setOpenBlockModal(false)} /> : null}
            {openReportModal? <ReportUserModal username={statusToBeViewed.username} reportAction={reportAction} setOpenReportModal={()=>setOpenReportModal(false)} /> : null} 
            {openSuccesModal? <SuccessModal username={statusToBeViewed.username} verb={verb} closeModal={()=> setOpenSuccessModal(false)} /> : null}
        </div>
    )
}

export default StatusViewModal;