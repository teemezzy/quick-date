import React from "react";
import "./PriceOption.css";

const PriceOption = () => {
    return (
        <div className="price-option-wrapper">
            <span className="title">Post Price</span>
            <div>
                <label className="label">Maximum Price</label>
                <input />
            </div>
            <div>
                <button className="set-price">Set Price</button>
                <button className="confirm">Confirm</button>
            </div>
        </div>
    )
}

export default PriceOption;