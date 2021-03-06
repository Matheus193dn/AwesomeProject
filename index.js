// Import a library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }} >
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent(appName, () => App);
