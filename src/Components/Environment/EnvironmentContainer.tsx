import React, {FC, useEffect} from "react";
import Environment from "./Environment";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../Redux/Store";
import {
    emptyAllThunk,
    generateAllThunk
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
import useWindowSize from "../../Hooks/useWindowWidth";

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
    generateAllThunk: (treesAmount: number, cloudsAmount: number) => void,
    emptyAllThunk: () => void
}

// let mapDispatchToProps = (state: AppStateType) => {};

type OwnPropsType = {}

export type EnvironmentPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const EnvironmentContainer: FC<EnvironmentPropsType> = (props) => {

    const windowWidth = useWindowSize();

    useEffect(() => {
        const treesAmount = Math.floor(windowWidth / 200);
        const cloudsAmount = Math.floor(windowWidth / 200);
        props.generateAllThunk(treesAmount, cloudsAmount);

        return () => {
            props.emptyAllThunk()
        }
    }, [windowWidth]);

    return (
        <Environment {...props}/>
    )
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
        generateAllThunk,
        emptyAllThunk
    })
)(EnvironmentContainer)

// export default EnvironmentContainer