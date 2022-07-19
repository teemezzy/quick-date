import React from "react";
import "./ReportUserModal.css";

const ReportUserModal = ({ username, setOpenReportModal, reportAction }) => {
    return (
        <div className="report-modal-container">
            <div className="report-action">
                <h3>Report Account</h3>
                <p>Do you want to report {username}?</p>
                <div className="report-btns-container">
                    <button className="report-btn" onClick={reportAction}>Report</button>
                    <button className="cancel-btn" onClick={setOpenReportModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ReportUserModal;