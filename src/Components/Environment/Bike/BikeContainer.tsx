import React, {FC} from "react";
import Bike from "./Bike";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Store";
import {BicyclePartsType, BicycleSVGOptionsType, CurrentBicyclePartsType} from "../../../Types/EnvironmentTypes";
import {
    getBicycleParts,
    getBicycleSVGOptions,
    getCurrentBicycleParts
} from "../../../Redux/Selectors/EnvironmentSelectors";

type MapStateToPropsType = {
    currentBicycleParts: CurrentBicyclePartsType,
    bicycleSVGOptions: BicycleSVGOptionsType,
    bicycleParts: BicyclePartsType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        currentBicycleParts: getCurrentBicycleParts(state),
        bicycleSVGOptions: getBicycleSVGOptions(state),
        bicycleParts: getBicycleParts(state)
    }
};

type MapDispatchToPropsType = {}

type OwnPropsType = {}

export type BikePropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const BikeContainer: FC<BikePropsType> = (props) => {
    return (
        <Bike {...props}/>
    )
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {})
)(BikeContainer)