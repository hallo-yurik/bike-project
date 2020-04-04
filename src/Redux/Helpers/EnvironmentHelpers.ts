import {allParts, BicyclePartsType, CurrentBicyclePartsType, Parts} from "../../Types/EnvironmentTypes";

export const changeBicyclePartTransformer = (currentParts: CurrentBicyclePartsType,
                                             parts: BicyclePartsType,
                                             point: string,
                                             id: number) => {
    let newCurrentParts: Parts = currentParts;
    let newParts: allParts = parts;

    newCurrentParts[point] = newParts[point][id];

    return {...currentParts}
};