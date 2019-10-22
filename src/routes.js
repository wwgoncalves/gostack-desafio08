import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Animated, Easing } from 'react-native';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

/* Code below from https://github.com/ashrithks/RNTransitions */
/* Code aims to emulate the right-to-left screen transition from iOS */
const slideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  return { transform: [{ translateX }] };
};

const transitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 400,
      easing: Easing.out(Easing.cubic),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index } = scene;
      return slideFromRight(index, position, width);
    },
  };
};
/* Code above from https://github.com/ashrithks/RNTransitions */

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      initialRouteName: 'Main',
      headerBackTitleVisible: false,
      headerMode: 'float',
      defaultNavigationOptions: props => ({
        header: <Header {...props} />,
        headerStyle: {
          backgroundColor: '#191920',
          borderBottomWidth: 0,
          elevation: 0,
        },
      }),
      transitionConfig: transitionConfiguration,
    }
  )
);

export default Routes;
