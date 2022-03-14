import React, {useState} from "react";
import button from "bootstrap/js/src/button";

export const StarRatingResponsive = (values) => {
    const [ratingAmount, setRatingAmount] = useState(0);
    const [hover, setHover] = useState()
    console.log(ratingAmount)
    values.ratingAmount = ratingAmount
    console.log(values)
    return (
        <div className={"star-rating"}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type={'button'}
                        key={index}
                        className={index <= (hover || ratingAmount) ? "on" : "off"}
                        onClick={() => setRatingAmount(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(ratingAmount)}
                        value={values.ratingAmount}
                    >
                        <span className={"star"}>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};