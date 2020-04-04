import React, {useEffect, useState} from "react";

//Frame
const Frame1 = () => {
    return (
        <>
            <path d="M353.497 130.524H186.829" stroke="#202020" strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path
                d="M126.224 225.972C119.597 225.972 114.224 231.345 114.224 237.972C114.224 244.6 119.597 249.972 126.224 249.972L126.224 225.972ZM422.989 50.9402C426.414 45.2662 424.591 37.8903 418.917 34.4655C413.243 31.0407 405.867 32.864 402.442 38.5379L422.989 50.9402ZM296.081 237.972L296.081 249.972C300.285 249.972 304.182 247.772 306.354 244.173L296.081 237.972ZM126.224 249.972L296.081 249.972L296.081 225.972L126.224 225.972L126.224 249.972ZM306.354 244.173L422.989 50.9402L402.442 38.5379L285.807 231.771L306.354 244.173Z"
                fill="#202020"/>
        </>
    )
};
const Frame2 = () => {
    return (
        <>
            <path d="M353.713 130.647H186.948" stroke="#202020" strokeWidth="24" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M417 35L359 129M357 130L125 235" stroke="#202020" strokeWidth="24" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </>
    )
};
const Frame3 = () => {
    return (
        <>
            <path
                d="M354.497 142.579C361.124 142.579 366.497 137.206 366.497 130.579C366.497 123.951 361.124 118.579 354.497 118.579V142.579ZM187.829 118.579C181.201 118.579 175.829 123.951 175.829 130.579C175.829 137.206 181.201 142.579 187.829 142.579V118.579ZM425.34 49.0893C428.703 43.3785 426.8 36.0228 421.089 32.6597C415.379 29.2967 408.023 31.2 404.66 36.9107L425.34 49.0893ZM362 133L351.66 126.911C351.599 127.015 351.539 127.119 351.481 127.225L362 133ZM131.338 224.812C125.159 222.416 118.208 225.483 115.812 231.662C113.416 237.841 116.483 244.792 122.662 247.188L131.338 224.812ZM354.497 118.579H187.829V142.579H354.497V118.579ZM404.66 36.9107L351.66 126.911L372.34 139.089L425.34 49.0893L404.66 36.9107ZM127 236C122.662 247.188 122.665 247.19 122.669 247.191C122.671 247.192 122.675 247.193 122.678 247.194C122.684 247.197 122.69 247.199 122.698 247.202C122.713 247.208 122.731 247.215 122.752 247.223C122.795 247.239 122.849 247.26 122.915 247.285C123.047 247.335 123.227 247.402 123.453 247.484C123.906 247.649 124.544 247.877 125.361 248.155C126.993 248.712 129.339 249.471 132.333 250.339C138.318 252.072 146.913 254.242 157.593 256.077C178.93 259.742 208.765 262.1 242.825 256.86L239.175 233.14C208.235 237.9 181.07 235.758 161.657 232.423C151.962 230.758 144.245 228.803 139.011 227.286C136.396 226.529 134.405 225.882 133.104 225.439C132.454 225.217 131.976 225.046 131.679 224.938C131.53 224.884 131.427 224.845 131.37 224.823C131.341 224.813 131.324 224.806 131.319 224.804C131.316 224.803 131.317 224.803 131.32 224.805C131.321 224.805 131.324 224.806 131.327 224.807C131.328 224.808 131.331 224.809 131.332 224.809C131.335 224.81 131.338 224.812 127 236ZM242.825 256.86C261.768 253.946 279.31 244.481 294.603 232.825C309.961 221.118 323.707 206.699 335.122 192.898C346.567 179.061 355.876 165.591 362.32 155.596C365.548 150.589 368.072 146.43 369.8 143.503C370.665 142.039 371.331 140.881 371.788 140.078C372.016 139.676 372.192 139.363 372.315 139.144C372.376 139.034 372.423 138.948 372.458 138.886C372.475 138.856 372.488 138.831 372.499 138.812C372.504 138.803 372.508 138.795 372.511 138.789C372.513 138.786 372.515 138.782 372.516 138.781C372.517 138.778 372.519 138.775 362 133C351.481 127.225 351.482 127.223 351.483 127.221C351.483 127.221 351.484 127.22 351.484 127.22C351.484 127.22 351.483 127.222 351.481 127.225C351.478 127.231 351.471 127.243 351.461 127.262C351.441 127.298 351.407 127.359 351.36 127.442C351.267 127.61 351.12 127.87 350.923 128.218C350.527 128.914 349.927 129.957 349.133 131.301C347.545 133.991 345.186 137.88 342.149 142.592C336.061 152.034 327.308 164.689 316.628 177.602C305.918 190.551 293.476 203.507 280.054 213.738C266.565 224.019 252.732 231.054 239.175 233.14L242.825 256.86Z"
                fill="#202020"/>
        </>
    )
};
//Handlebar
const Handlebar1 = () => {
    return (
        <>
            <path
                d="M364.763 12.8393C364.763 12.8393 416.295 1.91356 434.146 71.6452C451.998 141.377 451.608 146.26 467.166 183.323C482.724 220.385 500.211 236.672 500.211 236.672"
                stroke="#202020" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    )
};
const Handlebar2 = () => {
    return (
        <>
            <path d="M401.512 12.0166L352.291 79.1362" stroke="#202020" strokeWidth="24" strokeLinecap="round"
                  strokeLinejoin="round" transform="translate(-1,-61)"/>
            <path d="M501.7 297.981L384.732 36.627" stroke="#202020" strokeWidth="24" strokeLinecap="round"
                  strokeLinejoin="round" transform="translate(-1,-61)"/>
        </>
    )
};
const Handlebar3 = () => {
    return (
        <>
            <path
                d="M365.449 62.0229C365.449 62.0229 418.617 67.3397 434.77 121.608C450.923 175.876 452.231 196.223 467.789 233.285C483.347 270.348 500.835 292.231 500.835 292.231"
                stroke="#202020" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"
                transform="translate(0,-55)"/>
            <path d="M334.893 58.6423C382.436 64.2354 407.047 68.1508 410.962 26.7604" stroke="#202020"
                  strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" transform="translate(0,-55)"/>
        </>
    )
};
//Saddle
export const Saddle1 = () => {
    return (
        <>
            <path d="M204.284 77.1466H126.294M197.841 148.018L165.289 77.1465" stroke="#202020" strokeWidth="24"
                  strokeLinecap="round" strokeLinejoin="round"/>

        </>
    )
};
export const Saddle2 = () => {
    return (
        <>
            <path d="M199.714 88.3979L127.178 59.7466" stroke="#202020" strokeWidth="24" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M195.998 144.943L163.446 74.0718" stroke="#202020" strokeWidth="24" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </>
    )
};
export const Saddle3 = () => {
    return (
        <>
            <path
                d="M205.15 88.9834C211.777 88.9834 217.15 83.6108 217.15 76.9834C217.15 70.356 211.777 64.9834 205.15 64.9834V88.9834ZM127.161 64.9834C120.533 64.9834 115.161 70.356 115.161 76.9834C115.161 83.6108 120.533 88.9834 127.161 88.9834V64.9834ZM187.803 152.863C190.569 158.886 197.694 161.525 203.716 158.759C209.739 155.993 212.378 148.868 209.612 142.846L187.803 152.863ZM177.06 71.9747C174.294 65.9522 167.169 63.3125 161.147 66.0787C155.124 68.8449 152.484 75.9696 155.251 81.9921L177.06 71.9747ZM152.031 44.0979C147.667 39.1103 140.086 38.6049 135.098 42.9691C130.11 47.3333 129.605 54.9144 133.969 59.9021L152.031 44.0979ZM196.722 88.9317C203.311 89.6377 209.226 84.8681 209.932 78.2784C210.638 71.6887 205.868 65.7743 199.278 65.0683L196.722 88.9317ZM205.15 64.9834H127.161V88.9834H205.15V64.9834ZM209.612 142.846L177.06 71.9747L155.251 81.9921L187.803 152.863L209.612 142.846ZM133.969 59.9021C150.71 79.035 172.701 86.3581 196.722 88.9317L199.278 65.0683C178.499 62.8419 163.29 56.965 152.031 44.0979L133.969 59.9021Z"
                fill="#202020"/>
        </>
    )
};
//Wheels
export const Wheels1 = () => {
    const [degree, setDegree] = useState(0);

    useEffect(() => {
        const increment = setInterval(() => {
            setDegree(degree + 1);
        }, 1);
        return () => clearInterval(increment);
    }, [degree]);

    const rotate1 = "rotate(" + degree + ", 127, 238)";
    const rotate2 = "rotate(" + degree + ", 502, 238)";


    return (
        <>
            <path d="M239.645 237.659C239.645 300.522 188.685 351.482 125.823 351.482C62.9601 351.482 12 300.522 12 237.659C12 174.797 62.9601 123.837 125.823 123.837C188.685 123.837 239.645 174.797 239.645 237.659Z" stroke="#202020" strokeWidth="24"/>
            <line x1="202" y1="238.837" x2="226" y2="238.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>
            <line x1="126" y1="161.837" x2="126" y2="137.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>
            <line x1="55" y1="312.201" x2="71.9706" y2="295.23" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>
            <line x1="26" y1="238.837" x2="50" y2="238.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>
            <line x1="69.9706" y1="184.121" x2="53" y2="167.151" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>
            <line x1="196.971" y1="313.121" x2="180" y2="296.151" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>
            <line x1="180" y1="182.807" x2="196.971" y2="165.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>
            <line x1="126" y1="339.837" x2="126" y2="315.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate1}/>

            <path d="M617.645 237.659C617.645 300.522 566.685 351.482 503.823 351.482C440.96 351.482 390 300.522 390 237.659C390 174.797 440.96 123.837 503.823 123.837C566.685 123.837 617.645 174.797 617.645 237.659Z" stroke="#202020" strokeWidth="24"/>
            <line x1="580" y1="238.837" x2="604" y2="238.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
            <line x1="504" y1="161.837" x2="504" y2="137.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
            <line x1="433" y1="312.201" x2="449.971" y2="295.23" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
            <line x1="404" y1="238.837" x2="428" y2="238.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
            <line x1="447.971" y1="184.121" x2="431" y2="167.151" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
            <line x1="574.971" y1="313.121" x2="558" y2="296.151" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
            <line x1="558" y1="182.807" x2="574.971" y2="165.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
            <line x1="504" y1="339.837" x2="504" y2="315.837" stroke="#202020" strokeWidth="16" strokeLinecap="round" transform={rotate2}/>
        </>
    )
};
export const Wheels2 = () => {
    const [degree, setDegree] = useState(0);

    useEffect(() => {
        const increment = setInterval(() => {
            setDegree(degree + 1);
        }, 1);
        return () => clearInterval(increment);
    }, [degree]);

    const rotate1 = "rotate(" + degree + ", 127, 238)";
    const rotate2 = "rotate(" + degree + ", 502, 238)";

    return (
        <>
            <path
                d="M241.107 238.35C241.107 301.213 190.147 352.173 127.284 352.173C64.4217 352.173 13.4616 301.213 13.4616 238.35C13.4616 175.488 64.4217 124.528 127.284 124.528C190.147 124.528 241.107 175.488 241.107 238.35Z"
                stroke="#202020" strokeWidth="24"/>
            <path d="M221.211 208.098L126.105 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate1}/>
            <path d="M184.884 319.902L126.106 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate1}/>
            <path d="M67.327 319.902L126.106 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate1}/>
            <path d="M126.106 139L126.106 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate1}/>
            <path d="M31 208.098L126.106 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate1}/>
            <path
                d="M617.98 238.35C617.98 301.213 567.02 352.173 504.157 352.173C441.295 352.173 390.335 301.213 390.335 238.35C390.335 175.488 441.295 124.528 504.157 124.528C567.02 124.528 617.98 175.488 617.98 238.35Z"
                stroke="#202020" strokeWidth="24"/>
            <path d="M599.211 208.098L504.105 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate2}/>
            <path d="M562.884 319.902L504.106 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate2}/>
            <path d="M445.327 319.902L504.106 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate2}/>
            <path d="M504.106 139V239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate2}/>
            <path d="M409 208.098L504.106 239" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate2}/>
        </>
    )
};
export const Wheels3 = () => {
    const [degree, setDegree] = useState(0);

    useEffect(() => {
        const increment = setInterval(() => {
            setDegree(degree + 1);
        }, 1);
        return () => clearInterval(increment);
    }, [degree]);

    const rotate1 = "rotate(" + degree + ", 127, 238)";
    const rotate2 = "rotate(" + degree + ", 502, 238)";

    return (
        <>
            <path
                d="M240.117 238.35C240.117 301.213 189.157 352.173 126.294 352.173C63.4318 352.173 12.4717 301.213 12.4717 238.35C12.4717 175.488 63.4318 124.528 126.294 124.528C189.157 124.528 240.117 175.488 240.117 238.35Z"
                stroke="#202020" strokeWidth="24"/>
            <path d="M179.313 146.26L73.1281 330.178" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate1}/>
            <path
                d="M616.99 238.35C616.99 301.213 566.03 352.173 503.167 352.173C440.305 352.173 389.345 301.213 389.345 238.35C389.345 175.488 440.305 124.528 503.167 124.528C566.03 124.528 616.99 175.488 616.99 238.35Z"
                stroke="#202020" strokeWidth="24"/>
            <path d="M555.967 146.26L449.782 330.178" stroke="#202020" strokeWidth="16" strokeLinecap="round"
                  strokeLinejoin="round" transform={rotate2}/>
        </>
    )
};

export const bicyclePartsFrame = [
    {id: 0, part: "frame", src: <Frame1/>},
    {id: 1, part: "frame", src: <Frame2/>},
    {id: 2, part: "frame", src: <Frame3/>}
];

export const bicyclePartsHandlebar = [
    {id: 0, part: "handlebar", src: <Handlebar1/>},
    {id: 1, part: "handlebar", src: <Handlebar2/>},
    {id: 2, part: "handlebar", src: <Handlebar3/>}
];

export const bicyclePartsSaddle = [
    {id: 0, part: "handlebar", src: <Saddle1/>},
    {id: 1, part: "handlebar", src: <Saddle2/>},
    {id: 2, part: "handlebar", src: <Saddle3/>}
];

export const bicyclePartsWheels = [
    {id: 0, part: "handlebar", src: <Wheels1/>},
    {id: 0, part: "handlebar", src: <Wheels2/>},
    {id: 0, part: "handlebar", src: <Wheels3/>}
];








