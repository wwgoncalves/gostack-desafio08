import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, ShoppingBasketIcon, NotificationDot } from './styles';
import Logo from '../../assets/Logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>
        <Image source={Logo} />
      </TouchableWithoutFeedback>
      <ShoppingBasketIcon onPress={() => navigation.navigate('Cart')} />
      {cartSize ? (
        <NotificationDot>{cartSize < 10 ? cartSize : '9+'}</NotificationDot>
      ) : null}
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
