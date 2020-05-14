import React, {FC} from "react";
import OptionsContainer from "./Options/OptionsContainer";
import EnvironmentStyles from "./../../Styles/Environment.module.css";
import BikeContainer from "./Bike/BikeContainer";
import {EnvironmentPropsType} from "./EnvironmentContainer";

const Environment: FC<EnvironmentPropsType> = (props) => {

    const Tree = props.locationParts.trees;
    const Cloud = props.locationParts.clouds;

    return (
        <div className={EnvironmentStyles.general__container}>
            <OptionsContainer/>
            <hr className={EnvironmentStyles.line}/>

            <div className={EnvironmentStyles.environment__container}>
                <div className={EnvironmentStyles.except__road}>
                    <div className={EnvironmentStyles.forest}>
                        {props.treeArray.map((tree, index) => {
                                return (<div key={index} className={tree}>
                                        {props.parts.location[0].isChosen
                                            ? <Tree className={EnvironmentStyles.tree}/>
                                            :
                                            <Tree className={`${EnvironmentStyles.tree} ${EnvironmentStyles.transparent}`}/>
                                        }
                                    </div>
                                )
                            }
                        )}
                    </div>

                    <div className={EnvironmentStyles.sky}>
                        {props.cloudArray.map((cloud, index) => {
                                return (<div key={index} className={cloud}>
                                        {props.parts.location[1].isChosen
                                            ? <Cloud className={EnvironmentStyles.cloud}/>
                                            : <Cloud
                                                className={`${EnvironmentStyles.cloud} ${EnvironmentStyles.transparent}`}/>
                                        }
                                    </div>
                                )
                            }
                        )}
                    </div>
                    <div className={EnvironmentStyles.bike__container}>
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