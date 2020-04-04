import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebookSquare, FaPinterestSquare, FaYoutube, FaMobileAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import footer_bg from './footer_bg.png';
import volks from './volks.gif';
import cyclist from './cyclist.gif';

const StyledFooter = styled.footer`
    overflow: hidden;
`;

const FooterBgDiv = styled.div`
    background: url('${footer_bg}');
    position: relative;
    width: 100%;
    height: 266px;
    bottom: 0;
    left: 0;
`;

const VolksKeyframes = keyframes`
    0% {
        left: -25%;
    }
    100% {
        left: 100%;
    }
`;

const Volks = styled.div`
    background: url('${volks}');
    width: 330px;
    height: 145px;
    background-size:100%;
    position: absolute;
    z-index: 996;
    bottom: 0;
    left: 30%;
    animation: ${VolksKeyframes} 22s linear infinite;
`;

const CyclistKeyframes = keyframes`
    0% {
        left: 100%;
    }
    100% {
        left: -25%;
    }
`;

const Cyclist = styled.div`
    background: url('${cyclist}');
    width: 88px;
    height: 96px;
    background-size:100%;
    bottom: 0;
    left: 38%;
    position: absolute;
    z-index: 997;
    transform: scaleX(-1);
    animation: ${CyclistKeyframes} 30s linear infinite;
`;

const CopyRight = styled.p`
    background: #333333;
    color: #fff;
    font-size: 12px;
    text-align: right;
    padding: 5px;
    padding-right: 20px;
`;

const CopyRightA = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        color: red;
    }
`;

const FooterDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: gray;
`;

const FooterSubDiv = styled.div`

`;

const FootHeader = styled.h3`
    color: #ff6161;
`;

const BoldSpan = styled.span`
    font-weight: bold;
`;

const SocialIcon = styled.a`
    text-decoration: none;
    font-size: 26px;
    color: gray;

    &:hover {
        color: red;
    }
`;

const ContactP = styled.p``;

const ContactIcon = styled.span`
    position: relative;
    top: 3px;
    color: red;
`;

const Footer = props => {

    return (
        <StyledFooter>
            <FooterDiv>
                <FooterSubDiv style={{ flexGrow: '0.2' }}>
                    <FootHeader>Contact</FootHeader>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                        <FooterSubDiv>
                            <BoldSpan>Vivek Computers</BoldSpan><br/>
                            Ekta Nagar,<br/>
                            Behind Sahayog Mangal Karyalay,<br/>
                            Basmat Road,<br/>
                            Parbhani - 431401.
                            <ContactP><ContactIcon><FaMobileAlt/></ContactIcon> 8888022294</ContactP>
                            <ContactP><ContactIcon><IoMdMail/></ContactIcon> <SocialIcon style={{ fontSize: 'inherit' }} href="mailto:15210084@mkcl.org">15210084@mkcl.org</SocialIcon></ContactP>
                        </FooterSubDiv>
                        <FooterSubDiv>
                            <BoldSpan>Vivek Computers</BoldSpan><br/>
                            Anand Nagar Corner,<br/>
                            Above Buldhana Bank,<br/>
                            Main Road,<br/>
                            Purna - 431511.
                            <ContactP><ContactIcon><FaMobileAlt/></ContactIcon> 8177971834</ContactP>
                            <ContactP><ContactIcon><IoMdMail/></ContactIcon> <SocialIcon style={{ fontSize: 'inherit' }} href="mailto:15210109@mkcl.org">15210109@mkcl.org</SocialIcon></ContactP>
                        </FooterSubDiv>
                    </div>
                </FooterSubDiv>
                <FooterSubDiv>
                    <FootHeader>Social Connections</FootHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <SocialIcon target="_blank" href="https://www.facebook.com/VivekComputersParbhani"><FaFacebookSquare/></SocialIcon>
                        <SocialIcon target="_blank" href="https://www.pinterest.com/vivekcomputers/"><FaPinterestSquare/></SocialIcon>
                        <SocialIcon target="_blank" href="https://www.youtube.com/channel/UCxGKxXn7Au_a9WAR5MHo8uw"><FaYoutube/></SocialIcon>
                    </div>
                    <br/><div className="fb-page" data-href="https://www.facebook.com/VivekComputersParbhani" data-tabs="timeline" data-width="" data-height="70" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/VivekComputersParbhani" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/VivekComputersParbhani">Vivek Computers, Parbhani</a></blockquote></div>
                </FooterSubDiv>
            </FooterDiv>

            <FooterBgDiv>
                <Volks/>
                <Cyclist/>
            </FooterBgDiv>

            <CopyRight>
                &copy; All rights reserved by <CopyRightA href="https://www.idealbiz.in" target="_blank">Idealbiz.in</CopyRightA>
            </CopyRight>
        </StyledFooter>
    );
}

export default Footer;