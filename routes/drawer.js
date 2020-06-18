import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AppStack from './appStack';
import Login from '../components/Login';

const drawerNavigator = createDrawerNavigator({
    Заказы : {
        screen: AppStack
    },
    Выход: {
        screen: Login
    }
})

export default createAppContainer(drawerNavigator);