import {AppStateType} from "../../../Redux/Store";
import {
    getOptions,
    getMenu,
    getConstructor,
    getButtonText,
    getParts,
    getCurrentOption
} from "../../../Redux/Selectors/OptionsSelectors";
import {MenuType, PartsType, OnePartType} from "../../../Types/OptionsTypes";
import React, {FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Options from "./Options";
import {
    activatePoint,
    choosePoint,
    clearCurrentOption,
    deactivatePoint,
    setCurrentOption,
    setOptions
} from "../../../Redux/Reducers/OptionsReducer/options-reducer";
import {changePart} from "../../../Redux/Reducers/EnvironmentReducer/environment-reducer";

type MapStateToPropsType = {
    constructor: string,
    buttonText: string,
    currentOption: string,
    options: Array<OnePartType>,
    menu: Array<MenuType>,
    parts: PartsType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        constructor: getConstructor(state),
        buttonText: getButtonText(state),
        currentOption: getCurrentOption(state),
        options: getOptions(state),
        menu: getMenu(state),
        parts: getParts(state)
    }
};

type MapDispatchToPropsType = {
    activatePoint: (id: number) => void,
    deactivatePoint: () => void,
    setOptions: (point: string) => void,
    setCurrentOption: (point: string) => void,
    clearCurrentOption: () => void,
    choosePoint: (id: number) => void,
    changePart: (point: string, id: number) => void
}

type OwnPropsType = {}

export type OptionsPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const OptionsContainer: FC<OptionsPropsType> = (props) => {
    return (
        <Options {...props}/>
    )
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
        activatePoint,
        deactivatePoint,
        setOptions,
        setCurrentOption,
        clearCurrentOption,
        choosePoint,
        changePart
    })
)(OptionsContainer)