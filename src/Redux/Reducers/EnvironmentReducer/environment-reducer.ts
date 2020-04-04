import {
    bicyclePartsFrame,
    bicyclePartsHandlebar,
    bicyclePartsSaddle,
    bicyclePartsWheels
} from "./EnvironmentReducerParts";
import {changeBicyclePartTransformer} from "../../Helpers/EnvironmentHelpers";

const CHANGE_PART = "CHANGE_PART";

let initialState = {
    currentLocation: {
        trees: false,
        mountains: false,
        clouds: false
    },
    locationParts: {
        trees: {},
        mountains: {},
        clouds: {}
    },
    currentBicycleParts: {
        frame: bicyclePartsFrame[0],
        handlebar: bicyclePartsHandlebar[0],
        saddle: bicyclePartsSaddle[0],
        wheels: bicyclePartsWheels[0]
    },
    bicycleSVGOptions: {
        width: 600,
        height: 400,
        viewBox: "-1 -61 630 426"
    },
    bicycleParts: {
        frame: bicyclePartsFrame,
        handlebar: bicyclePartsHandlebar,
        saddle: bicyclePartsSaddle,
        wheels: bicyclePartsWheels
    }
};

type EnvironmentInitialStateType = typeof initialState;

const environmentReducer = (state = initialState, action: ActionsTypes): EnvironmentInitialStateType => {
    // console.log(action)
    switch (action.type) {
        case CHANGE_PART:
            if (action.point !== "location") {
                return {
                    ...state,
                    currentBicycleParts: changeBicyclePartTransformer(
                        {...state.currentBicycleParts},
                        {...state.bicycleParts},
                        action.point,
                        action.id)
                };
            }
            return state;


        default:
            return state;
    }
};

type ActionsTypes = ChangePartActionType;

type ChangePartActionType = { type: typeof CHANGE_PART, point: string, id: number };
export const changePart = (point: string, id: number) => ({type: CHANGE_PART, point, id});

export default environmentReducer;