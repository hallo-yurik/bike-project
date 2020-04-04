export interface Options {
    [index: string]: Array<OnePartType>;
}

export type MenuType = {
    id: number,
    point: string
    isActive: boolean
}

export type PartsType = {
    wheels: Array<OnePartType>,
    saddle: Array<OnePartType>,
    frame: Array<OnePartType>,
    handlebar: Array<OnePartType>,
    location: Array<OnePartType>
}

export type OnePartType = {
    id: number,
    point: string,
    src: any,
    isChosen: boolean
}