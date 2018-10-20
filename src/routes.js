import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Home from './components/homepage';
import First from './components/first';
import Second from './components/second';
import Result from './components/result';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar>
                <Scene key='main'>
                    <Scene
                        key='Home'
                        component={Home}
                        title="Entry Questionnaires" />
                    <Scene
                        key='first'
                        component={First}
                        title="Primary Questionnaires" />
                    <Scene
                        key='second'
                        component={Second}
                        title="Secondary Questionnaires"
                    />
                    <Scene
                        key='result'
                        component={Result}
                        title='Result'
                    />
                </Scene>

            </Stack>
        </Router>
    );
};

export default RouterComponent;