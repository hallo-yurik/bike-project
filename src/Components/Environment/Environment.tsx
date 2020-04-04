import React, {FC} from "react";
import OptionsContainer from "./Options/OptionsContainer";
import EnvironmentStyles from "./../../Styles/Environment.module.css";
import BikeContainer from "./Bike/BikeContainer";
import {EnvironmentPropsType} from "./EnvironmentContainer";

const Environment: FC<EnvironmentPropsType> = () => {
    return (
        <div className={EnvironmentStyles.general__container}>
            <OptionsContainer/>
            <hr className={EnvironmentStyles.line}/>

            <div className={EnvironmentStyles.environment__container}>
                <div className={EnvironmentStyles.except__road}>
                    <div className={EnvironmentStyles.bike}>
                        <BikeContainer/>
                    </div>
                </div>
                <div className={EnvironmentStyles.road}>
                    <div className={EnvironmentStyles.middle__line}></div>
                    <div className={EnvironmentStyles.middle__line}></div>
                    <div className={EnvironmentStyles.middle__line}></div>
                    <div className={EnvironmentStyles.middle__line}></div>
                    <div className={EnvironmentStyles.middle__line}></div>
                    <div className={EnvironmentStyles.middle__line}></div>
                </div>
            </div>
        </div>
    )
};

export default Environment;