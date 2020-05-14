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

const CHANGE_PART = "CHANGE_PART";
const GENERATE_TREES = "GENERATE_TREES";
const EMPTY_TREES = "EMPTY_TREES";
const GENERATE_CLOUDS = "GENERATE_CLOUDS";
const EMPTY_CLOUDS = "EMPTY_CLOUDS"

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
            // return state

        case EMPTY_CLOUDS:
            return {
                ...state,
                cloudArray: []
            };

        default:
            return state;
    }
};

type ActionsTypes =
    ChangePartActionType
    | GenerateTreesActionType
    | EmptyTreesActionType
    | GenerateCloudsActionType
    | EmptyCloudsActionType;

type ChangePartActionType = { type: typeof CHANGE_PART, point: string, id: number };
export const changePart = (point: string, id: number) => ({type: CHANGE_PART, point, id});

type GenerateTreesActionType = { type: typeof GENERATE_TREES, amount: number };
export const generateTrees = (amount: number) => ({type: GENERATE_TREES, amount});

type EmptyTreesActionType = { type: typeof EMPTY_TREES };
export const emptyTrees = () => ({type: EMPTY_TREES});

type GenerateCloudsActionType = { type: typeof GENERATE_CLOUDS, amount: number };
export const generateClouds = (amount: number) => ({type: GENERATE_CLOUDS, amount});

type EmptyCloudsActionType = { type: typeof EMPTY_CLOUDS };
export const emptyClouds = () => ({type: EMPTY_CLOUDS});

export default environmentReducer;