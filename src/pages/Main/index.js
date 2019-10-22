import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ActivityIndicator,
  List,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AmountContainer,
  AddShoppingCartIcon,
  AmountText,
  ActionText,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      // eslint-disable-next-line no-param-reassign
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  function handleAddProductToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ProductItem>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.formattedPrice}</ProductPrice>
              <AddButton onPress={() => handleAddProductToCart(item.id)}>
                <AmountContainer>
                  <AddShoppingCartIcon />
                  <AmountText>{amount[item.id] || 0}</AmountText>
                </AmountContainer>
                <ActionText>ADD TO CART</ActionText>
              </AddButton>
            </ProductItem>
          )}
        />
      )}
    </Container>
  );
}
