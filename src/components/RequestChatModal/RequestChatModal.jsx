import React from "react";
import "./RequestChatModal.css";
import close_btn from "../../assets/images/close-btn-dark.svg";
import { useNavigate } from "react-router-dom";

const RequestChatModal = ({member, closeModal}) => {
    const navigate = useNavigate()
    return (
        <div className="request-chat-modal-container">
            <div className="request-chat-action">
                <div className="close" onClick={closeModal}><img src={close_btn} alt="close" /></div>
                <div className="content">
                    <img src={member.image} alt="member" />
                    <p>Chat with</p>
                    <h5>{member.firstname}</h5>
                    <button onClick={()=>navigate('/chats')}>Open for 10 Tokens</button>
                </div>
            </div>
        </div>
    )
}

export default RequestChatModal;