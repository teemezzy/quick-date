import React from "react";
import "./BlockUserModal.css";

const BlockUserModal = ({ username, setOpenBlockModal, blockAction }) => {
    return (
        <div className="block-modal-container">
            <div className="block-action">
                <h3>Block Account</h3>
                <p>Why do you want to block {username}?</p>
                <button className="report-btn" id="inappropriate behaviour" onClick={blockAction()}>Inappropriate Behaviour</button>
                <button className="report-btn add-mt-20" id="inappropriate messages" onClick={blockAction()}>Inappropriate Messages</button>
                <button className="report-btn add-mt-20" id={'other reasons'} onClick={blockAction()}>Other Reasons</button>
                <button className="cancel-btn add-mt-20" onClick={setOpenBlockModal}>Cancel</button>
            </div>
        </div>
    )
}

export default BlockUserModal;