let initialState = {
    topic: "lorem!",
    text: "Lorem ipsum dolor sit amet, " +
        "consectetur adipiscing elit. " +
        "Sapien leo pulvinar amet sed. " +
        "Elementum vestibulum pharetra " +
        "morbi habitasse elementum aliquet.",
    buttonText: "start"
};

type StartInitialStateType = typeof initialState;

const startReducer = (state = initialState, action: any): StartInitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};

export default startReducer;