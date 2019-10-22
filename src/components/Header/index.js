import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, ShoppingBasketIcon, NotificationDot } from './styles';
import Logo from '../../assets/Logo.png';

function Header({ cartSize, navigation }) {
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
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
