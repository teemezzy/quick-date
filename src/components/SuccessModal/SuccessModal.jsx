import React from "react";
import "./SuccessModal.css";
import success_check from "../../assets/images/success checkmark.svg";

const SuccessModal =({verb, username, closeModal})=>{
    return(
        <div className="success-modal-container" onClick={closeModal}>
            <div className="success-action">
                <img src={success_check} alt="success" />
                <p className="add-mt-20">You have successfully {verb} {username}</p>
            </div>
        </div>
    )
}

export default SuccessModal;