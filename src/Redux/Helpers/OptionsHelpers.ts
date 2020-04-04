import {MenuType, OnePartType, Options, PartsType} from "../../Types/OptionsTypes";

export const activatePointTransformer = (menu: Array<MenuType>, id: number) => {
    return menu.map((point) => {
            if (point.id === id) {
                return {...point, isActive: true}
            }
            return {...point, isActive: false}
        }
    )
};

export const deactivatePointTransformer = (menu: Array<MenuType>) => {
    return menu.map((point) => {
            return {...point, isActive: false}
        }
    )
};

export const bikePartsTransformer = (options: Array<OnePartType>, id: number) => {
    return options.map((part) => {
        if (part.id === id) {
            return {...part, isChosen: true}
        }
        return {...part, isChosen: false}
    })
};

export const locationTransformer = (options: Array<OnePartType>, id: number) => {
    return options.map((location) => {
        if (location.id === id) {
            if (location.isChosen) {
                return {...location, isChosen: false}
            }
            return {...location, isChosen: true}
        }
        return {...location}
    })
};

export const bikePartsStatusChangeTransform = (parts: PartsType, currentOption: string, id: number) => {
    //дозволяє вставляти індекс (назва розділу (wheels, saddle...)) в state.parts
    let newOptions: Options = parts;
    //перебирає елементи масиву (wheels, saddle...)
    newOptions[currentOption] = newOptions[currentOption].map((part) => {
        if (part.id === id) {
            return {...part, isChosen: true}
        }
        return {...part, isChosen: false}
    });

    return {...parts}
};

export const locationStatusChangeTransformer = (parts: PartsType, currentOption: string, id: number) => {

    //дозволяє вставляти індекс (назва розділу (wheels, saddle...)) в state.parts
    let newOptions: Options = parts;
    //перебирає елементи масиву (wheels, saddle...)
    newOptions[currentOption] = newOptions[currentOption].map((location) => {
        if (location.id === id) {
            if (location.isChosen) {
                return {...location, isChosen: false}
            }
            return {...location, isChosen: true}
        }
        return {...location}
    });

    return {...parts}
};