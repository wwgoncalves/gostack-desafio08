import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  background-color: #191920;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ShoppingBasketIcon = styled(Icon).attrs({
  name: 'shopping-basket',
  size: 24,
  color: '#fff',
})``;

export const NotificationDot = styled.Text`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #7159c1;
  color: #fff;
  font-size: 11px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  text-align: center;
  text-align-vertical: auto;
`;
