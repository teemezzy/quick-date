import React from "react";
import close_btn from "../../assets/images/close-btn-dark.svg";

const SendTokenModal = ({closeModal, executeSend}) => {
    return (
        <div className="request-chat-modal-container">
            <div className="request-chat-action">
                <div className="close" onClick={closeModal}><img src={close_btn} alt="close" /></div>
                <div className="content">
                    <p><b>Token Request Notification</b></p>
                    <p>You are about to send 50 tokens to Elena</p>
                    <button onClick={executeSend}>Send token</button>
                </div>
            </div>
        </div>
    )
}

export default SendTokenModal;