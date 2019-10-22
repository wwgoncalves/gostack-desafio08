import { NavigationActions } from 'react-navigation';

let navigator;

export default {
  setNavigator(navigatorReference) {
    if (navigatorReference) {
      navigator = navigatorReference;
    }
  },

  navigate(routeName, params) {
    if (navigator && routeName) {
      navigator.dispatch(NavigationActions.navigate({ routeName, params }));
    }
  },

  goBack() {
    if (navigator) {
      navigator.dispatch(NavigationActions.back());
    }
  },
};
