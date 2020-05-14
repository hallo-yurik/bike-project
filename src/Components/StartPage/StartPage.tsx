import React, {FC} from 'react';
import {StartPagePropsType} from './StartPageContainer';
import {NavLink} from "react-router-dom";
import StartPageStyles from '../../Styles/StartPage.module.css';
import {ReactComponent as Tree} from "./../../Images/Tree.svg";
import {ReactComponent as Bike} from "./../../Images/Bike.svg";
// import Bike from "./../../Images/Bike.svg";
// import Tree from "./../../Images/Tree.svg";
import useWindowSize from "../../Hooks/useWindowWidth";

const StartPage: FC<StartPagePropsType> = (props) => {

    const windowWidth = useWindowSize();

    let treeArray = [];
    for (let i = 0; i < Math.floor(windowWidth / 252); i++) {
        treeArray.push(<div key={i} className={StartPageStyles.tree__container}>
            <Tree className={StartPageStyles.tree}/>
            {/*<img className={StartPageStyles.tree} src={Tree} alt="tree"/>*/}
        </div>)
    }

    let bikeArray = [];
    for (let i = 0; i < Math.floor(windowWidth) / 297; i++) {
        bikeArray.push(<div key={i} className={StartPageStyles.bike__container}>
            <Bike className={StartPageStyles.bike}/>
            {/*<img className={StartPageStyles.bike} src={Bike} alt="bike"/>*/}
        </div>)
    }

    return (
        <div className={StartPageStyles.main__container}>
            <div className={StartPageStyles.higher__line}>
                {treeArray}
            </div>
            <div className={StartPageStyles.container}>
                <div className={StartPageStyles.topic}>{props.topic}</div>
                <div className={StartPageStyles.text}>{props.text}</div>
                <NavLink className={StartPageStyles.button__text} to="/ride">
                    <div className={StartPageStyles.button}>
                        {props.buttonText}
                    </div>
                </NavLink>
            </div>
            <div className={StartPageStyles.lower__line}>
                {bikeArray}
            </div>
        </div>
    )
};

export default StartPage;