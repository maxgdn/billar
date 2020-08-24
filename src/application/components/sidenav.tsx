import React, {useState} from 'react';
import styled from 'styled-components'
import { Link, LinkProps } from "@reach/router";

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

interface PathProps {
    self: number;
    selected: number;
}

const Path = styled(Link)<PathProps & LinkProps<any>>`
    margin: 0 auto;
    padding: 8px 16px;
    text-decoration: ${(props) => (props.selected === props.self) ? 'underline' : 'none'};
    font-size: 1.4rem;
    color: ${colors.white};
    display: block;
    transition: 0.3s;

    &:hover {
        transform: scale(1.03);
    }
`;

const PathCenterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    padding-top: 1rem;
    padding-bottom: 1rem;
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

interface PathItem {
    id: number;
    route: string;
    name: string;
}

const paths: PathItem[] = [
    {id: 0, route: '/', name: 'Home'},
    {id: 1, route: '/clients', name: 'Clients'},
    {id: 2, route: '/report', name: 'Report' },
    {id: 3, route: '/settings',name: 'Settings'},
]

const SideNav: React.FC = (props) => {
    const [visible,setVisible] = useState(true);
    const [selected,setSelected] = useState(0);

    const flipNav = () => {

        setVisible(!visible);
    }

    const chosen = (index: number) => {
        console.log(index)
        setSelected(index);
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
                    <PathCenterContainer>
                        {paths.map((item: PathItem) => {
                            return <Path to={item.route} onClick={() => chosen(item.id)} self={item.id} selected={selected}>{item.name}</Path>;
                        })}
                    </PathCenterContainer>
                    

                   
                        
                    
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