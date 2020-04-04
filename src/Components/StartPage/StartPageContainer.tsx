import React, {FC} from 'react';
import StartPage from './StartPage';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppStateType} from '../../Redux/Store';
import {getTopic, getText, getButtonText} from "../../Redux/Selectors/StartPageSelectors";

type MapStateToPropsType = {
    topic: string,
    text: string,
    buttonText: string
}

let mapStateToProps = (state: AppStateType) => {
    return {
        topic: getTopic(state),
        text: getText(state),
        buttonText: getButtonText(state)
    }
};

type MapDispatchToPropsType = {}
let mapDispatchToProps = (state: AppStateType): MapDispatchToPropsType => {
    return {}
};

type OwnPropsType = {}

export type StartPagePropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const StartPageContainer: FC<StartPagePropsType> = (props) => {
    return (
        <StartPage {...props}/>
    )
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, mapDispatchToProps)
)(StartPageContainer)