import React from 'react';

import { HomeWrapper, P } from './Styling';
import Replicators from '../Essays/Replicators';

const HomePage = (props) => {
    return (
        <HomeWrapper>
            <p>Today's essay:</p>
            <Replicators />
        </HomeWrapper>
    )
}

export default HomePage;