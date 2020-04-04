import {AppStateType} from "../Store";

export const getTopic = (state: AppStateType) => {
    return state.Start.topic.toUpperCase();
};

export const getText = (state: AppStateType) => {
    return state.Start.text;
};

export const getButtonText = (state: AppStateType) => {
    return state.Start.buttonText.toUpperCase();
};