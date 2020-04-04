import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { FullScreenDiv, FullScreenDivHead } from '../CommonComponents';
import { getToppers } from '../axios/getData';
import Topper from './Topper';

const Gradient = keyframes`
    0% {
        background-position:5% 0%;
    }
    50% {
        background-position:96% 100%;
    }
    100% {
        background-position:5% 0%;
    }
`;

const ToppersContainer = styled( FullScreenDiv )`
    background: linear-gradient(130deg, #07d9a3, #048fee);
    background-size: 400% 400%;
    animation: ${Gradient} 16s ease infinite;
    display: flex;
    flex-direction: column;
`;

const ToppersHead = styled( FullScreenDivHead )`
    color: white;
`;

const SliderNavContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SliderNav = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 10px;
    background: #d4d4d4;
    cursor: pointer;

    &:hover {
        background: #45454d;
    }

    ${props => ( ( props.id == props.active ) && css`
        background: #45454d;
    `)}
`;

const Toppers = props => {

    let [ toppers, setToppers ] = useState( [] );
    let [ active, setActive ] = useState( 0 );
    let intervalInstance = null;

    useEffect( () => {
        getToppers()
        .then( jsonResponse => {
            setToppers( jsonResponse.data );
            activateSlider( jsonResponse.data.length );
        } );

        return( () => {
            clearInterval( intervalInstance );
        } );
    }, [] );

    const activateSlider = total => {
        intervalInstance = setInterval( () => {
            setActive( preActive => {
                if( total == ( preActive + 1 ) ) {
                    return 0;
                }

                return preActive + 1;
            });
        }, 3000 );
    };

    const changeSlide = key => {
        setActive( Number.parseInt( key ) );
    };
    
    return (
        <ToppersContainer>
            <ToppersHead>Toppers</ToppersHead>

            {( 0 < toppers.length ) &&
                <Topper
                    topper={toppers[active]}
                />
            }

            <SliderNavContainer>
                {Object.keys( toppers ).map( key => (
                    <SliderNav key={key} id={key} active={active} onClick={() => changeSlide( key )}></SliderNav>
                 ))}
            </SliderNavContainer>
        </ToppersContainer>
    );
}

export default Toppers;