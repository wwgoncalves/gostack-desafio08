import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
  padding: 10px 0px;
`;

export const ScrollableContainer = styled.ScrollView`
  flex-grow: 0;
  background-color: #fff;
  border-radius: 4px;
  margin: 10px 20px 10px 20px;
  padding: 10px 10px 10px 10px;
`;

export const NoShoppingCartIcon = styled(Icon).attrs({
  name: 'remove-shopping-cart',
  color: '#eee',
  size: 70,
})`
  align-self: center;
`;
export const EmptyCartText = styled.Text`
  align-self: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
`;

export const CartItem = styled.View`
  background-color: #fff;
  height: 130px;
  margin: 10px 0px;
`;
export const ItemHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ItemImage = styled.Image`
  align-self: center;
  width: 80px;
  height: 80px;
`;
export const ItemDescription = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 170px;
  margin-left: 10px;
`;
export const ItemName = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
`;
export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const DeleteForeverIcon = styled(Icon).attrs({
  name: 'delete-forever',
  color: '#7159c1',
  size: 24,
})`
  padding: 5px;
`;

export const ItemFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  border-radius: 4px;
`;
export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RemoveCircleOutlineIcon = styled(Icon).attrs({
  name: 'remove-circle-outline',
  color: '#7159c1',
  size: 20,
})`
  padding: 10px;
`;
export const ItemAmount = styled.TextInput.attrs({
  editable: false,
})`
  font-size: 14px;
  color: #666;
  background-color: #fff;
  padding: 0px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const AddCircleOutlineIcon = styled(Icon).attrs({
  name: 'add-circle-outline',
  color: '#7159c1',
  size: 20,
})`
  padding: 10px;
`;
export const Subtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const GrandTotalLabel = styled.Text`
  align-self: center;
  font-size: 16px;
  color: #999;
  text-transform: uppercase;
  margin-top: 10px;
`;
export const GrandTotalPrice = styled.Text`
  align-self: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
`;
export const CheckoutButton = styled(RectButton)`
  align-items: center;
  margin: 30px 0px 20px 0px;
  border-radius: 4px;
  background-color: #7159c1;
`;
export const ActionText = styled.Text`
  text-align: center;
  font-size: 14px;
  padding: 12px 15px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const Button = styled(RectButton)``;
