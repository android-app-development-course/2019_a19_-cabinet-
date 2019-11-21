import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StorageRoute from './compoments/StorageCompoment'
import AddCat from "./compoments/AddCat";
import * as React from "react";



const StorageStackNavigator = createStackNavigator({
    storage: StorageRoute,
    addcat: AddCat
}, {
    initialRouteName: 'storage',
    headerMode: 'none',
});

export default createAppContainer(StorageStackNavigator);
