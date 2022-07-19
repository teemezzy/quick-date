import React from "react";
import "./DateForm.css";
import { BsArrowLeft } from "react-icons/bs";
import drink from "../../../assets/images/cup.svg";
import dinner from "../../../assets/images/dinner.svg";
import freaky from "../../../assets/images/freaky.svg";
import male from "../../../assets/images/male-large.svg";
import female from "../../../assets/images/female-large.svg";

const DateForm = () => {
    return (
        <div className="container date-form-wrapper">
            <div><BsArrowLeft className='back-arrow' /></div>

            <div className="main-content">
                <div className="title ml-4">
                    Set Up Date Request
                </div>
                <div className="d-flex gap-4 mt-4">
                    <p className="number">1</p>
                    <div className="item">
                        <p className="m-0">What kind of date do you have in mind?</p>
                        <p>You can select one or more options</p>
                        <div className="input-icon-container">
                            <img src={drink} alt="drink" />
                            <button>Drink</button>
                        </div>
                        <div className="input-icon-container">
                            <img src={dinner} alt="dinner" />
                            <button>Dinner</button>
                        </div>
                        <div className="input-icon-container">
                            <img src={freaky} alt="freky" />
                            <button>Freaky</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4 mt-4">
                    <p className="number">2</p>
                    <div className="item">
                        <p className="m-0">Who are you looking for?</p>
                        <p>You can select one or more options</p>
                        <div className="input-icon-container">
                            <img src={male} alt="male" />
                            <button>Man</button>
                        </div>
                        <div className="input-icon-container">
                            <img src={female} alt="female" />
                            <button>Woman</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4 mt-4">
                    <p className="number">3</p>
                    <div className="item">
                        <p className="m-0">Location for date</p>
                        <p>You can select one or more options</p>
                        <div className="input-icon-container">
                            <select>
                                <option>Nigeria</option>
                            </select>
                        </div>
                        <div className="input-icon-container">
                            <select>
                                <option>Location</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4 mt-4">
                    <p className="number">4</p>
                    <div className="item">
                        <p className="m-0">What day would you like to meet?</p>
                        <p>Kindly select your preferred day</p>
                        <div className="input-icon-container">
                            <input type="date" />
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4 mt-4">
                    <p className="number">5</p>
                    <div className="item">
                        <p className="m-0">When should your date start?</p>
                        <p>Kindly select your preferred time</p>
                        <div className="input-icon-container">
                            <input type="time" />
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4 mt-4">
                    <p className="blank-number"></p>
                    <div className="item">
                        <button className="submit">Finish Date Set Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateForm;