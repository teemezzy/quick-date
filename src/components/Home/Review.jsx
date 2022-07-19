import React from "react";
import reviews_img from "../../assets/images/reviews_img.png";
import "./Review.css";

const Review = () => {
    return (
        <div>
            <h3 className="text-center pt-4 pb-4">Reviews</h3>
        <div className="review-container d-flex gap-4">
            <div className="item-one d-flex flex-column justify-content-between">
                <div>
                    <img src={reviews_img} alt="review" />
                    <p>She really is a class act. Very beautiful with a lovely figure that would really turn you on. </p>
                </div>
                <h5 className="name">Cassandra, Abuja</h5>
            </div>
            <div className="item-one d-flex flex-column justify-content-between">
                <div>
                    <img src={reviews_img} alt="review" />
                    <p>She really is a class act. Very beautiful with a lovely figure that would really turn you on. </p>
                </div>
                <h5 className="name">Cassandra, Abuja</h5>
            </div>
            <div className="item-one d-flex flex-column justify-content-between">
                <div>
                    <img src={reviews_img} alt="review" />
                    <p>She really is a class act. Very beautiful with a lovely figure that would really turn you on. </p>
                </div>
                <h5 className="name">Cassandra, Abuja</h5>
            </div>
        </div>
        </div>
    )
}

export default Review;