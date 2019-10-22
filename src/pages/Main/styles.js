import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
  padding: 10px 0px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: '#7159c1',
})`
  flex: 1;
  align-self: center;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
`;

export const ProductItem = styled.View`
  background-color: #fff;
  border-radius: 4px;
  width: 220px;
  height: 380px;
  margin: 10px 0px 10px 20px;
  padding: 10px;
`;
export const ProductImage = styled.Image`
  align-self: center;
  width: 200px;
  height: 200px;
`;
export const ProductTitle = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 16px;
  margin-top: 10px;
`;
export const ProductPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
`;
export const AddButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  border-radius: 4px;
  background-color: #7159c1;
`;
export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const AddShoppingCartIcon = styled(Icon).attrs({
  name: 'add-shopping-cart',
  size: 16,
  color: '#fff',
})`
  margin-right: 5px;
`;
export const AmountText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
export const ActionText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
