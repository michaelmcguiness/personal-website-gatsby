import React from 'react';

import { HomeWrapper, P } from './Styling';
import Essay from './Essay';

const HomePage = (props) => {
    return (
        <HomeWrapper>
            <p>Today's essay:</p>
            <Essay id={1} />
        </HomeWrapper>
    )
}

export default HomePage;