import React, {useState} from 'react';
import styled from 'styled-components'
import { Link } from "@reach/router";

import Title from './title';
import DateView from './dateview';

import colors from '../colors';

const navWidth: string = '15vw';

const navDefaultWidth: string = '2.6vw';

const Container = styled.div<Props>`
    transition: margin-left .5s;
    margin-left: ${(props) => props.visible ? navWidth : navDefaultWidth};
    padding: 16px;
`;

interface Props {
    visible: boolean;
}

const Nav = styled.div<Props>`
    height: 100%;
    width: ${(props) => props.visible ? navWidth : navDefaultWidth};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${colors.dark2};
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;
`;

const Path = styled(Link)`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: ${colors.white};
    display: block;
    transition: 0.3s;

    &:hover {
        color: ${colors.tertiary};
        text-decoration: underline;
        transform: scale(1.03);
    }
`;

const CloseButton = styled.div`
    color: ${colors.white};
    position: absolute;
    top: 0;
    right: 8px;
    font-size: 36px;
    cursor: pointer;
`;

const TitleWrapper = styled(Title)`
    background-color: ${colors.white};
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
`
const TitleCenterContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const DateWrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: 30px;
`;

const DateCenterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

interface VisibleProps {
    time: string;
}

const VisibleContainer = styled.div<Props>`
    width: 100%;
    height: 100%;
    opacity: ${(props) => !props.visible ? '0' : '1'};
    display: ${(props) => !props.visible ? 'none' : 'block'};
    transition: 0.3s;
`;

const Arrow = styled.div`
    
`;

const Times = styled.div`
    
`;

const SideNav: React.FC = (props) => {
    const [visible,setVisible] = useState(true);

    const flipNav = () => {

        setVisible(!visible);
    }

    return (
        <Container visible={visible}>
            <Nav visible={visible}>
                <CloseButton>{visible ? <Times onClick={flipNav}>&times;</Times> : <Arrow onClick={flipNav}>▶</Arrow>}</CloseButton>
                
                <VisibleContainer visible={visible}>
                    <TitleCenterContainer>
                        <TitleWrapper>
                            Billar
                        </TitleWrapper>
                    </TitleCenterContainer>
                    
                    <Path to={'/'}>Home</Path>
                    <Path to={'/clients'}>Clients</Path>
                    <Path to={'/report'}>Report</Path>
                    <Path to={'/settings'}>Settings</Path>

                   
                        
                    
                </VisibleContainer>

                <DateWrapper>
                    <VisibleContainer visible={visible}>
                        <DateCenterContainer>
                            <DateView/>
                        </DateCenterContainer>
                    </VisibleContainer>
                </DateWrapper>  
            </Nav>
            {props.children}
        </Container>
    );
}

export default SideNav;