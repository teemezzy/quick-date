import React from "react";
import "./SettingsKyc.css";

const SettingsKyc = ()=> {
    return (
        <div className="ml-4 settings-kyc-wrapper mb-4">
            <h4 className="title">KYC Compliance</h4>
            <p>Please verify your identity</p>
            <div className="mt-4 item">
                <p>First Name</p>
                <input type='text' placeholder="first name" /> 
            </div>
            <div className="mt-4 item">
                <p>Last Name</p>
                <input type='text' placeholder="last name" /> 
            </div>
            <div className="mt-4 item">
                <p>Date of birth</p>
                <input type='date' placeholder="date of birth" /> 
            </div>
            <div className="mt-4 item">
                <p>Address</p>
                <input type='text' placeholder="address" /> 
            </div>
            <div className="mt-4 item">
                <p>City</p>
                <input type='text' placeholder="city" /> 
            </div>
            <div className="mt-4 item">
                <p>State</p>
                <input type='text' placeholder="state" /> 
            </div>
            <div className="mt-4 item">
                <p>Postcode</p>
                <input type='text' placeholder="postcode" /> 
            </div>
            <div className="mt-4 item">
                <p>Country</p>
                <input type='text' placeholder="country" /> 
            </div>
            <div className="mt-4 item">
                <p>Nationality</p>
                <input type='text' placeholder="nationality" /> 
            </div>
            <div className="mt-4 item">
                <p>Phone</p>
                <input type='number' placeholder="phone number" /> 
            </div>
            <div className="mt-4 item">
                <p>Document Type</p>
                <input type='text' placeholder="document" /> 
            </div>
            <div className="item title"><button className="submit">Save</button></div>
        </div>
    )
}

export default SettingsKyc;