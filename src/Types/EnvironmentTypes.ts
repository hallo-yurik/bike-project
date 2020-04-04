export interface Parts {
    [index: string]: OnePathPartType;
}

export interface allParts {
    [index: string]: Array<OnePathPartType>
}

export type CurrentLocationType = {
    trees: boolean,
    mountains: boolean,
    clouds: boolean
}

export type CurrentBicyclePartsType = {
    frame: OnePathPartType,
    handlebar: OnePathPartType,
    saddle: OnePathPartType,
    wheels: OnePathPartType,
}

export type BicycleSVGOptionsType = {
    width: number,
    height: number,
    viewBox: string
}

export type BicyclePartsType = {
    frame: Array<OnePathPartType>,
    handlebar: Array<OnePathPartType>,
    saddle: Array<OnePathPartType>,
    wheels: Array<OnePathPartType>
}

export type OnePathPartType = {
    id: number,
    part: string,
    src: any
}

export type LocationParts = {
    trees: any,
    mountains: any,
    clouds: any
}