import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

class Main extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    const { products } = this.state;

    this.setState({ loading: true });

    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({
      products: products.length ? [...products, data] : data,
      loading: false,
    });
  }

  handleAddProductToCart = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;
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
                <AddButton onPress={() => this.handleAddProductToCart(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    // eslint-disable-next-line no-param-reassign
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
