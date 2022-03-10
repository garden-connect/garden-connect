import React, {useState} from "react";
import button from "bootstrap/js/src/button";

export const StarRating = ({avgRating}) => {
    const [rating, setRating] = useState(avgRating);
    const [hover, setHover] = useState(0);
    // console.log("rating is: " + rating)
    return (
        <div className={"star-rating"}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type={'button'}
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        >
                        <span className={"star"}>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};
