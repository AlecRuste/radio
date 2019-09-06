/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import navigation from './navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
