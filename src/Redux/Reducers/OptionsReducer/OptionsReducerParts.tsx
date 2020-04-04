import React from "react";

//Wheels
import {ReactComponent as Wheel1} from "./PartsImages/Wheels/Wheel1.svg";
import {ReactComponent as Wheel2} from './PartsImages/Wheels/Wheel2.svg';
import {ReactComponent as Wheel3} from './PartsImages/Wheels/Wheel3.svg';
//Saddle
import {ReactComponent as Saddle1} from './PartsImages/Saddle/Saddle1.svg';
import {ReactComponent as Saddle2} from './PartsImages/Saddle/Saddle2.svg';
import {ReactComponent as Saddle3} from './PartsImages/Saddle/Saddle3.svg';
//Frame
import {ReactComponent as Frame1} from './PartsImages/Frame/Frame1.svg';
import {ReactComponent as Frame2} from './PartsImages/Frame/Frame2.svg';
import {ReactComponent as Frame3} from './PartsImages/Frame/Frame3.svg';
//Stems
import {ReactComponent as Stem1} from './PartsImages/Stem/Stem1.svg';
import {ReactComponent as Stem2} from './PartsImages/Stem/Stem2.svg';
import {ReactComponent as Stem3} from './PartsImages/Stem/Stem3.svg';
//Location
import {ReactComponent as Tree} from './PartsImages/Location/Tree.svg';
import {ReactComponent as Cloud} from './PartsImages/Location/Cloud.svg';
import {ReactComponent as Mountain} from './PartsImages/Location/Mountain.svg';

export const partsWheels = [
    {id: 0, point: "wheels", src: <Wheel1/>, isChosen: true},
    {id: 1, point: "wheels", src: <Wheel2/>, isChosen: false},
    {id: 2, point: "wheels", src: <Wheel3/>, isChosen: false}
];

export const partsSaddle = [
    {id: 0, point: "saddle", src: <Saddle1/>, isChosen: true},
    {id: 1, point: "saddle", src: <Saddle2/>, isChosen: false},
    {id: 2, point: "saddle", src: <Saddle3/>, isChosen: false}
];

export const partsFrame = [
    {id: 0, point: "frame", src: <Frame1/>, isChosen: true},
    {id: 1, point: "frame", src: <Frame2/>, isChosen: false},
    {id: 2, point: "frame", src: <Frame3/>, isChosen: false}
];

export const partsHandlebar = [
    {id: 0, point: "handlebar", src: <Stem1/>, isChosen: true},
    {id: 1, point: "handlebar", src: <Stem2/>, isChosen: false},
    {id: 2, point: "handlebar", src: <Stem3/>, isChosen: false}
];

export const partsLocation = [
    {id: 0, point: "location", src: <Tree/>, isChosen: true},
    {id: 1, point: "location", src: <Cloud/>, isChosen: false},
    {id: 2, point: "location", src: <Mountain/>, isChosen: false}
];
