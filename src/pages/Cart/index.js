import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function incrementAmount(product) {
    const { id, amount } = product;

    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  }

  function decrementAmount(product) {
    const { id, amount } = product;

    dispatch(CartActions.updateAmountRequest(id, amount - 1));
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
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
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
