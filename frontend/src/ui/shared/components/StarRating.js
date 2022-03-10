import React, {useState} from "react";
import button from "bootstrap/js/src/button";
import {Stack} from "react-bootstrap";

export const StarRating = ({avgRating}) => {
       return (
        <Stack direction={"horizontal"} className={"star-rating"}>
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
        </Stack>
    );
};
