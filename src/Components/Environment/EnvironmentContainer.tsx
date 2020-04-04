import React, {FC} from "react";
import Environment from "./Environment";

type MapStateToPropsType = {}

// let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
// };

type MapDispatchToPropsType = {}

// let mapDispatchToProps = (state: AppStateType) => {};

type OwnPropsType = {}

export type EnvironmentPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const EnvironmentContainer: FC<EnvironmentPropsType> = (props) => {
    return (
        <Environment {...props}/>
    )
};



// export default compose(
//     connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
//     ({}, {})
// )(EnvironmentContainer)

export default EnvironmentContainer