let initialState = {
    topic: "lorem!",
    text: "Lorem ipsum dolor sit amet, " +
        "consectetur adipiscing elit. " +
        "Sapien leo pulvinar amet sed. " +
        "Elementum vestibulum pharetra " +
        "morbi habitasse elementum aliquet."
};

type FinishInitialStateType = typeof initialState;

const finishReducer = (state = initialState, action: any): FinishInitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};

export default finishReducer;