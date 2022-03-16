import React, {useState} from "react";
import button from "bootstrap/js/src/button";
import {Stack} from "react-bootstrap";

export const StarRating = ({avgRating}) => {
       return (
        <div className={"hstack d-flex align-items-baseline"}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <div
                        key={index}
                        className={index <= (avgRating) ? "on" : "off"}
                        >
                        <span className={"star"}>&#9733;</span>
                    </div>
                );
            })}
        </div>
    );
};
