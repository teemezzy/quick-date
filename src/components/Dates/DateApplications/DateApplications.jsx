import React from "react";
import male from "../../../assets/images/male.svg";
import female from "../../../assets/images/female.svg";
import hookup2 from "../../../assets/images/hookup1.svg";

import "./DateApplications.css";
import NoDates from "../NoDates";

const DateApplications = () => {
    const availableDates = [{ time: '9PM(GMT+1)', image: hookup2 }, { time: '9PM(GMT+1)', image: hookup2 }, { time: '9PM(GMT+1)', image: hookup2 }, { time: '9PM(GMT+1)', image: hookup2 }, { time: '9PM(GMT+1)', image: hookup2 }, { time: '9PM(GMT+1)', image: hookup2 }];

    return (
        <div>
            {
                availableDates.length === 0 ?
                    <NoDates data={{title: "There are no Date Applications", subTitle: "Come back in a few minutes or search in a city nearby"}} />
                    :
                    <div className="available-dates-container">
                        {
                            availableDates.map((date, key) =>
                                <div key={key} className="item">
                                    <h5>Today at {date.time}</h5>
                                    <p>Time remaining: expired</p>
                                    <p><img src={date.image} alt="user" /></p>
                                    <h5>Makayla <span className="age">30</span></h5>
                                    <p>I am looking for: <img src={male} className="mate" alt="male" /> <img src={female} className="mate" alt="female" /></p>
                                    <div>
                                        <button className="mode">Freaky</button>
                                        <button className="mode">Drinks</button>
                                        <button className="mode">Downtown</button>
                                    </div>
                                    <div className="action-holder">
                                        <button className="apply">Apply Now</button>
                                        <button className="decline">Decline</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    )
}

export default DateApplications;