import {
    activatePointTransformer, bikePartsStatusChangeTransform,
    bikePartsTransformer,
    deactivatePointTransformer, locationStatusChangeTransformer,
    locationTransformer
} from "../../Helpers/OptionsHelpers";
import {OnePartType, Options} from "../../../Types/OptionsTypes";
import {partsFrame, partsLocation, partsSaddle, partsHandlebar, partsWheels} from "./OptionsReducerParts";

const ACTIVATE_POINT = "ACTIVATE_POINT";
const DEACTIVATE_POINT = "DEACTIVATE_POINT";
const SET_OPTIONS = "SET_OPTIONS";
const SET_CURRENT_OPTION = "SET_CURRENT_OPTION";
const CLEAR_CURRENT_OPTION = "CLEAR_CURRENT_OPTION";
const CHOOSE_POINT = "CHOOSE_POINT";

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

// type DispatchType = Dispatch<ActionsTypes>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

type ActionsTypes =
    ActivatePointActionType
    | DeactivatePointActionType
    | SetOptionsActionType
    | SetCurrentOptionActionType
    | ClearCurrentOptionActionType
    | ChoosePointActionType

type ActivatePointActionType = { type: typeof ACTIVATE_POINT, id: number }
export const activatePoint = (id: number) => ({type: ACTIVATE_POINT, id});

type DeactivatePointActionType = { type: typeof DEACTIVATE_POINT }
export const deactivatePoint = () => ({type: DEACTIVATE_POINT});

type SetOptionsActionType = { type: typeof SET_OPTIONS, point: string }
export const setOptions = (point: string) => ({type: SET_OPTIONS, point});

type SetCurrentOptionActionType = { type: typeof SET_CURRENT_OPTION, point: string }
export const setCurrentOption = (point: string) => ({type: SET_CURRENT_OPTION, point});

type ClearCurrentOptionActionType = { type: typeof CLEAR_CURRENT_OPTION }
export const clearCurrentOption = () => ({type: CLEAR_CURRENT_OPTION});

type ChoosePointActionType = { type: typeof CHOOSE_POINT, id: number }
export const choosePoint = (id: number) => ({type: CHOOSE_POINT, id});

export default optionsReducer;