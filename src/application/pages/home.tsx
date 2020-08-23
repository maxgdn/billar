import React from 'react';
import {DateView} from '../components';
import { RouteComponentProps } from "@reach/router"

const Home: React.FC<RouteComponentProps> = (props) => {
    return (
        <DateView/>
    )
}

export default Home;