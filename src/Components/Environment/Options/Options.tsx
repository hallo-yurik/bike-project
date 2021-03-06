import React, {FC} from "react";
import {OptionsPropsType} from "./OptionsContainer";
import OptionsStyles from "./../../../Styles/Options.module.css";
import {NavLink} from "react-router-dom";

const Options: FC<OptionsPropsType> = (props) => {

    let partList = props.options.map((part) => {
        return (
            <div className={OptionsStyles.test__delete__later} key={part.id} onClick={() =>
                props.chooseExactPartThunk(part.id, part.point)
            }>
                {part.isChosen
                    ? React.cloneElement(part.src, {className: `${OptionsStyles.image__style} ${OptionsStyles.activated}`})
                    // ? <Src className={`${OptionsStyles.image__style} ${OptionsStyles.activated}`}/>
                    // : <Src className={OptionsStyles.image__style}/>
                    : React.cloneElement(part.src, {className: OptionsStyles.image__style})
                }
            </div>
        )
    });

    let menuList = props.menu.map(point => {
        if (point.isActive) {
            return <div onClick={() =>
                props.hidePartsThunk()
            } className={`${OptionsStyles.menu__text} ${OptionsStyles.activated}`} key={point.id}>{point.point}</div>
        } else {
            return <div onClick={() => {
                props.showPartsThunk(point.id, point.point)
            }} className={OptionsStyles.menu__text} key={point.id}>{point.point}</div>
        }
    });

    return (
        <div className={OptionsStyles.container}>
            <div className={OptionsStyles.menu__plus__parts}>
                <div className={OptionsStyles.inner__container}>
                    <div className={OptionsStyles.constructor__text}>
                        {props.constructor}
                    </div>
                    <div className={OptionsStyles.menu__container}>
                        {menuList}
                    </div>
                    <NavLink className={OptionsStyles.button__text} to="/finish">
                        <div className={OptionsStyles.button}>
                            {props.buttonText}
                        </div>
                    </NavLink>
                </div>
                <div className={OptionsStyles.parts__container}>
                    {partList}
                </div>
            </div>
        </div>
    )
};

export default Options;