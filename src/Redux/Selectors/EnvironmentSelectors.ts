import {AppStateType} from "../Store";

export const getCurrentBicycleParts = (state: AppStateType) => {
    return state.Environment.currentBicycleParts
};

export const getBicycleSVGOptions = (state: AppStateType) => {
    return state.Environment.bicycleSVGOptions
};

export const getBicycleParts = (state: AppStateType) => {
    return state.Environment.bicycleParts
};

export const getCurrentLocation = (state: AppStateType) => {
    return state.Environment.currentLocation
};

export const getLocationParts = (state: AppStateType) => {
    return state.Environment.locationParts
};