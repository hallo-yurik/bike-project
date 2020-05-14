import {
    bicyclePartsFrame,
    bicyclePartsHandlebar,
    bicyclePartsSaddle,
    bicyclePartsWheels
} from "./EnvironmentReducerParts";
import {changeBicyclePartTransformer} from "../../Helpers/EnvironmentHelpers";
import {ReactComponent as Tree} from "../../../Images/TreeEnvironment.svg";
import {ReactComponent as Cloud} from "../../../Images/CloudEnvironment.svg";
import EnvironmentStyles from "../../../Styles/Environment.module.css";
import {AppStateType} from "../../Store";
import {ThunkAction} from "redux-thunk";

const CHANGE_PART = "CHANGE_PART";
const GENERATE_TREES = "GENERATE_TREES";
const EMPTY_TREES = "EMPTY_TREES";
const GENERATE_CLOUDS = "GENERATE_CLOUDS";
const EMPTY_CLOUDS = "EMPTY_CLOUDS";

let initialState = {
    currentLocation: {
        trees: true,
        mountains: false,
        clouds: false
    },
    locationParts: {
        trees: Tree,
        mountains: {},
        clouds: Cloud
    },
    currentBicycleParts: {
        frame: bicyclePartsFrame[0],
        handlebar: bicyclePartsHandlebar[0],
        saddle: bicyclePartsSaddle[0],
        wheels: bicyclePartsWheels[0]
    },
    bicycleSVGOptions: {
        width: 600,
        height: 395,
        viewBox: "-1 -61 630 426"
    },
    bicycleParts: {
        frame: bicyclePartsFrame,
        handlebar: bicyclePartsHandlebar,
        saddle: bicyclePartsSaddle,
        wheels: bicyclePartsWheels
    },
    treeArray: [] as Array<string>,
    cloudArray: [] as Array<string>
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

        case GENERATE_TREES:
            const treeSizeArray = [EnvironmentStyles.tree__container__small, EnvironmentStyles.tree__container__medium, EnvironmentStyles.tree__container__big];
            const localTreeArray = [];

            for (let i = 0; i < action.amount; i++) {
                localTreeArray.push(treeSizeArray[Math.floor(Math.random() * treeSizeArray.length)]);
            }
            return {
                ...state,
                treeArray: [...localTreeArray]
            };

        case EMPTY_TREES:
            return {
                ...state,
                treeArray: []
            };

        case GENERATE_CLOUDS:
            const cloudSizeArray = [EnvironmentStyles.cloud__container__small, EnvironmentStyles.cloud__container__medium];
            const localCloudArray = [];

            for (let i = 0; i < action.amount; i++) {
                localCloudArray.push(cloudSizeArray[Math.floor(Math.random() * cloudSizeArray.length)]);
            }
            return {
                ...state,
                cloudArray: [...localCloudArray]
            };

        case EMPTY_CLOUDS:
            return {
                ...state,
                cloudArray: []
            };

        default:
            return state;
    }
};

export const actions = {
    generateTrees: (amount: number) => ({type: GENERATE_TREES, amount} as const),
    emptyTrees: () => ({type: EMPTY_TREES} as const),
    generateClouds : (amount: number) => ({type: GENERATE_CLOUDS, amount} as const),
    emptyClouds : () => ({type: EMPTY_CLOUDS} as const),
};

type ActionsTypes =
    ChangePartActionType
    |GenerateTreesActionType
    | EmptyTreesActionType
    | GenerateCloudsActionType
    | EmptyCloudsActionType;

// type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const generateAllThunk = (treesAmount: number, cloudsAmount: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.generateTrees(treesAmount) as GenerateTreesActionType);
        dispatch(actions.generateClouds(cloudsAmount) as GenerateCloudsActionType)
    }
};

export const emptyAllThunk = (): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.emptyTrees() as EmptyTreesActionType);
        dispatch(actions.emptyClouds() as EmptyCloudsActionType)
    }
};

type EmptyTreesActionType = { type: typeof EMPTY_TREES };
type GenerateCloudsActionType = { type: typeof GENERATE_CLOUDS, amount: number };
type EmptyCloudsActionType = { type: typeof EMPTY_CLOUDS };
type GenerateTreesActionType = { type: typeof GENERATE_TREES, amount: number };
type ChangePartActionType = { type: typeof CHANGE_PART, point: string, id: number };

export default environmentReducer;