import React from 'react';
import styled from 'styled-components';


const TopperDiv = styled.div`
    width: 100%;
    height: 350px;
    margin: 0;
    padding: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    box-sizing: border-box;
    background: transparent;
    color: white;
    font-weight: bold;
`;

const ImageOctogon = styled.div`
    clip-path: url(#octogon);
    height: 140px;
    width: 140px;
`;

const TopperImg = styled.img`
    width: 140px;
`;

const TopperName = styled.p`
    color: black;
`;

const Topper = props => {

    let { topper } = props;

    return(
            <TopperDiv>
                <ImageOctogon>
                    <TopperImg
                        src={`data:${topper.type};base64, ${topper.image}`}
                        alt={topper.studentname}
                    />
                </ImageOctogon>
                <TopperName>{topper.studentname}</TopperName>
                <p>{topper.course}</p>
                <p>{topper.marks}%</p>
                
                <svg>
                    <defs>
                        <clipPath clipPathUnits='objectBoundingBox' id='octogon'>
                            <polygon points='0.50001 0.00000, 0.61887 0.06700, 0.75011 0.06721, 0.81942 0.18444, 0.93300 0.25001, 0.93441 0.38641, 1.00000 0.49999, 0.93300 0.61887, 0.93300 0.75002, 0.81556 0.81944, 0.74999 0.93302, 0.61357 0.93444, 0.50001 1.00000, 0.38118 0.93302, 0.24998 0.93302, 0.18056 0.81556, 0.06700 0.74899, 0.06559 0.61359, 0.00000 0.49999, 0.06700 0.38111, 0.06700 0.25001, 0.18440 0.18058, 0.25043 0.06700, 0.38641 0.06559, 0.50001 0.00000'></polygon>
                        </clipPath>
                    </defs>
                </svg>
            </TopperDiv>
    );
}

export default Topper;