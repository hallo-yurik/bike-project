export const showParts = (id: number,
                          point: string,
                          activatePoint: (id: number) => void,
                          setOptions: (point: string) => void,
                          setCurrentOption: (point: string) => void) => {
    activatePoint(id);
    setOptions(point);
    setCurrentOption(point);
};

export const hideParts = (deactivatePoint: () => void,
                          clearCurrentOption: () => void) => {
    deactivatePoint();
    clearCurrentOption();
};

export const chooseExactPart = (id: number,
                                point: string,
                                choosePoint: (id: number) => void,
                                changePart: (point: string, id: number) => void) => {
    choosePoint(id);
    changePart(point, id);
};