import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  padding: 16px 18px;
  margin-bottom: 8px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.Text`
  font-size: ${( RFValue(14))}px;  
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;
