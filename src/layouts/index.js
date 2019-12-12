import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { STORE_KEYS } from '../stores';

import BasicView from '@/layouts/basic';
import { Wrapper } from './styles';

class SvcData extends PureComponent {
    render() {
        return (
            <Wrapper>
                <BasicView />
            </Wrapper>
        );
    }
}

const Main = props => {
    return (
        <Router>
            <Route exact path="/" component={() => <SvcData {...props} />} />
        </Router>
    );
};

export default Main;
