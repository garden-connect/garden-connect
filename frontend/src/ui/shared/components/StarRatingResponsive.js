import React, {useState} from "react";
import button from "bootstrap/js/src/button";

export const StarRatingResponsive = (props) => {
    const [ratingAmount, setRatingAmount] = useState(0);
    const [hover, setHover] = useState()
    // console.log(ratingAmount)
    // props.ratingAmount = ratingAmount
    // console.log(props)
    return (
        <div className={"star-rating"}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type={'button'}
                        key={index}
                        name={'ratingAmount'}
                        className={index <= (hover || ratingAmount) ? "on" : "off"}

                        onClick={() => {
                            setRatingAmount(index)
                            props.setFieldValue('ratingAmount', index)
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(ratingAmount)}
                        value={props.values.ratingAmount}
                    >
                        <span className={"star"}>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};