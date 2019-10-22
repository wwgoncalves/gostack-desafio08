import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  ScrollableContainer,
  NoShoppingCartIcon,
  EmptyCartText,
  CartItem,
  ItemHeader,
  ItemImage,
  ItemDescription,
  ItemName,
  ItemPrice,
  DeleteForeverIcon,
  ItemFooter,
  AmountContainer,
  RemoveCircleOutlineIcon,
  ItemAmount,
  AddCircleOutlineIcon,
  Subtotal,
  GrandTotalLabel,
  GrandTotalPrice,
  CheckoutButton,
  ActionText,
  Button,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function incrementAmount(product) {
    const { id, amount } = product;

    updateAmountRequest(id, amount + 1);
  }

  function decrementAmount(product) {
    const { id, amount } = product;

    updateAmountRequest(id, amount - 1);
  }

  return (
    <Container>
      <ScrollableContainer>
        {cart.length ? (
          <>
            {cart.map(product => (
              <CartItem key={String(product.id)}>
                <ItemHeader>
                  <ItemImage source={{ uri: product.image }} />
                  <ItemDescription>
                    <ItemName>{product.title}</ItemName>
                    <ItemPrice>{product.formattedPrice}</ItemPrice>
                  </ItemDescription>
                  <Button>
                    <DeleteForeverIcon
                      onPress={() => removeFromCart(product.id)}
                    />
                  </Button>
                </ItemHeader>
                <ItemFooter>
                  <AmountContainer>
                    <Button>
                      <RemoveCircleOutlineIcon
                        onPress={() => decrementAmount(product)}
                      />
                    </Button>
                    <ItemAmount>{product.amount}</ItemAmount>
                    <Button>
                      <AddCircleOutlineIcon
                        onPress={() => incrementAmount(product)}
                      />
                    </Button>
                  </AmountContainer>
                  <Subtotal>{product.subtotal}</Subtotal>
                </ItemFooter>
              </CartItem>
            ))}

            <GrandTotalLabel>GRAND TOTAL</GrandTotalLabel>
            <GrandTotalPrice>{total}</GrandTotalPrice>
            <CheckoutButton>
              <ActionText>PROCEED TO CHECKOUT</ActionText>
            </CheckoutButton>
          </>
        ) : (
          <CartItem>
            <NoShoppingCartIcon />
            <EmptyCartText>Your cart is empty.</EmptyCartText>
          </CartItem>
        )}
      </ScrollableContainer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      formattedPrice: PropTypes.string,
      amount: PropTypes.number,
      subtotal: PropTypes.string,
    })
  ).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
