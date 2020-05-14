import React, {FC} from "react";
import Environment from "./Environment";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../Redux/Store";
import {
    emptyClouds,
    emptyTrees,
    generateClouds,
    generateTrees
} from "../../Redux/Reducers/EnvironmentReducer/environment-reducer";
import {
    getCloudArray,
    getCurrentLocation,
    getLocationParts,
    getTreeArray
} from "../../Redux/Selectors/EnvironmentSelectors";
import {CurrentLocationType, LocationParts} from "../../Types/EnvironmentTypes";
import {getParts} from "../../Redux/Selectors/OptionsSelectors";
import {PartsType} from "../../Types/OptionsTypes";

type MapStateToPropsType = {
    locationParts: LocationParts;
    currentLocation: CurrentLocationType,
    treeArray: Array<string>,
    cloudArray: Array<string>,
    parts: PartsType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        locationParts: getLocationParts(state),
        currentLocation: getCurrentLocation(state),
        treeArray: getTreeArray(state),
        cloudArray: getCloudArray(state),
        parts: getParts(state)
    }
};

type MapDispatchToPropsType = {
    generateTrees: (amount: number) => void,
    emptyTrees: () => void,
    generateClouds: (amount: number) => void,
    emptyClouds: () => void
}

// let mapDispatchToProps = (state: AppStateType) => {};

type OwnPropsType = {}

export type EnvironmentPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const EnvironmentContainer: FC<EnvironmentPropsType> = (props) => {

    return (
        <Environment {...props}/>
    )
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
        generateTrees,
        emptyTrees,
        generateClouds,
        emptyClouds
    })
)(EnvironmentContainer)

// export default EnvironmentContainer