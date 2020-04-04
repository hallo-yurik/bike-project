import {AppStateType} from "../Store";

export const getConstructor = (state: AppStateType) => {
    return state.Options.constructor;
};

export const getButtonText = (state: AppStateType) => {
    return state.Options.buttonText;
};

export const getOptions = (state: AppStateType) => {
    return state.Options.options;
};

export const getMenu = (state: AppStateType) => {
    return state.Options.menu;
};

export const getParts = (state: AppStateType) => {
    return state.Options.parts;
};

export const getCurrentOption = (state: AppStateType) => {
    return state.Options.currentOption;
}