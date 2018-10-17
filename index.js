// Import a library
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Create a component
const App = () => (
    <Text>
        Some Text
    </Text>
);

// Render it to the device
AppRegistry.registerComponent(appName, () => App);