import React from "react";
import "./SettingsVoucher.css";

const SettingsVoucher = () => {
    return (
        <div className="ml-4 settings-voucher-wrapper mb-4">
            <h4 className="title">Voucher</h4>
            <div className="item">
                <p><b>How do I get a voucher?</b></p>
                <p className="">
                    You can receive a promo code on QuickDate social media platform, through our
                    newsletter or our customer service. Valid codes are visible in your QuickDate
                    account after activation.
                </p>
            </div>
            <div className="item">
                <p><b>How do I use my code?</b></p>
                <p>
                    Here you can redeem your code. Enter it in the field below and your free credit will
                    be automatically added to your Ohlala account. Don't forget that codes can expire or
                    only be active for a short time, so it's best to use them right away.
                </p>
            </div>
            <div className="item">
                <p>Voucher Code</p>
                <div><input placeholder="insert code"/></div>
                <div><button className="activate">Activate</button></div>
            </div>
        </div>
    )
}

export default SettingsVoucher;