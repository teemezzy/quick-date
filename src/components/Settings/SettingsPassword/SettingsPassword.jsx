import React from "react";
import "./SettingsPassword.css";

const SettingsPassword = ()=> {
    return (
        <div className="ml-4 settings-password-wrapper mb-4">
            <h4 className="text-center title">Password</h4>
            <div className="mt-4 item">
                <p>Current Password</p>
                <input type='password' /> 
            </div>
            <div className="mt-4 item">
                <p>New Password</p>
                <input type='password' /> 
            </div>
            <div className="mt-4 item">
                <p>Confirm Password</p>
                <input type='password' /> 
            </div>
            <div className="text-center item title"><button className="submit">Submit</button></div>
        </div>
    )
}

export default SettingsPassword;