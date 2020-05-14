import {
    activatePointTransformer, bikePartsStatusChangeTransform,
    bikePartsTransformer,
    deactivatePointTransformer, locationStatusChangeTransformer,
    locationTransformer
} from "../../Helpers/OptionsHelpers";
import {OnePartType, Options} from "../../../Types/OptionsTypes";
import {partsFrame, partsLocation, partsSaddle, partsHandlebar, partsWheels} from "./OptionsReducerParts";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../Store";

const ACTIVATE_POINT = "ACTIVATE_POINT";
const DEACTIVATE_POINT = "DEACTIVATE_POINT";
const SET_OPTIONS = "SET_OPTIONS";
const SET_CURRENT_OPTION = "SET_CURRENT_OPTION";
const CLEAR_CURRENT_OPTION = "CLEAR_CURRENT_OPTION";
const CHOOSE_POINT = "CHOOSE_POINT";
const CHANGE_PART = "CHANGE_PART";

let initialState = {
    constructor: "constructor",
    buttonText: "finish",
    currentOption: "",
    options: [] as Array<OnePartType>,
    menu: [
        {id: 0, point: "wheels", isActive: false},
        {id: 1, point: "saddle", isActive: false},
        {id: 2, point: "frame", isActive: false},
        {id: 3, point: "handlebar", isActive: false},
        {id: 4, point: "location", isActive: false}
    ],
    parts: {
        wheels: partsWheels,
        saddle: partsSaddle,
        frame: partsFrame,
        handlebar: partsHandlebar,
        location: partsLocation
    }
};

type OptionsInitialStateType = typeof initialState;

const optionsReducer = (state = initialState, action: ActionsTypes): OptionsInitialStateType => {
    let newOptions: Options = state.parts;
    switch (action.type) {

        case ACTIVATE_POINT:
            return {
                ...state,
                menu: activatePointTransformer([...state.menu], action.id),
            };

        case DEACTIVATE_POINT:
            return {
                ...state,
                menu: deactivatePointTransformer([...state.menu]),
                options: []
            };

        case SET_OPTIONS:
            return {
                ...state,
                options: [...newOptions[action.point]],
                parts: {
                    ...state.parts
                    // wheels: []
                }
            };

        case SET_CURRENT_OPTION:
            return {
                ...state,
                currentOption: action.point
            };

        case CLEAR_CURRENT_OPTION:
            return {
                ...state,
                currentOption: ""
            };

        case CHOOSE_POINT:
            if (state.currentOption !== "location") {
                return {
                    ...state,
                    options: bikePartsTransformer([...state.options], action.id),
                    parts: bikePartsStatusChangeTransform({...state.parts}, state.currentOption, action.id)
                }
            }
            return {
                ...state,
                options: locationTransformer([...state.options], action.id),
                parts: locationStatusChangeTransformer({...state.parts}, state.currentOption, action.id)
            };

        default:
            return state;
    }
};

export const actions = {
    changePart: (point: string, id: number) => ({type: CHANGE_PART, point, id} as const),
    activatePoint: (id: number) => ({type: ACTIVATE_POINT, id} as const),
    deactivatePoint: () => ({type: DEACTIVATE_POINT} as const),
    setOptions: (point: string) => ({type: SET_OPTIONS, point} as const),
    setCurrentOption: (point: string) => ({type: SET_CURRENT_OPTION, point} as const),
    clearCurrentOption: () => ({type: CLEAR_CURRENT_OPTION} as const),
    choosePoint: (id: number) => ({type: CHOOSE_POINT, id} as const)
};

type ActionsTypes =
    ChangePartActionType
    | ActivatePointActionType
    | DeactivatePointActionType
    | SetOptionsActionType
    | SetCurrentOptionActionType
    | ClearCurrentOptionActionType
    | ChoosePointActionType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const chooseExactPartThunk = (id: number,
                                     point: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.choosePoint(id) as ChoosePointActionType);
        dispatch(actions.changePart(point, id) as ChangePartActionType)
    }
};

export const hidePartsThunk = (): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.deactivatePoint() as DeactivatePointActionType);
        dispatch(actions.clearCurrentOption() as ClearCurrentOptionActionType);
    }
};

export const showPartsThunk = (id: number,
                               point: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.activatePoint(id) as ActivatePointActionType);
        dispatch(actions.setOptions(point) as SetOptionsActionType);
        dispatch(actions.setCurrentOption(point) as SetCurrentOptionActionType);
    }
};

type ActivatePointActionType = { type: typeof ACTIVATE_POINT, id: number }
type DeactivatePointActionType = { type: typeof DEACTIVATE_POINT }
type SetOptionsActionType = { type: typeof SET_OPTIONS, point: string }
type SetCurrentOptionActionType = { type: typeof SET_CURRENT_OPTION, point: string }
type ClearCurrentOptionActionType = { type: typeof CLEAR_CURRENT_OPTION }
type ChoosePointActionType = { type: typeof CHOOSE_POINT, id: number }
type ChangePartActionType = { type: typeof CHANGE_PART, point: string, id: number };

export default optionsReducer;