import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 16px 18px;
  font-size: ${( RFValue(14))}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 8px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${( RFValue(14))}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  
`;