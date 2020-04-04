import React, {FC} from "react";

import {BikePropsType} from "./BikeContainer";

const Bike: FC<BikePropsType> = (props) => {
    return (
        <svg width={props.bicycleSVGOptions.width} height={props.bicycleSVGOptions.height}
             viewBox={props.bicycleSVGOptions.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            {props.currentBicycleParts.frame.src}
            {props.currentBicycleParts.handlebar.src}
            {props.currentBicycleParts.saddle.src}
            {props.currentBicycleParts.wheels.src}
        </svg>
    )
};

export default Bike;
