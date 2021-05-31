import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface IconsProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 49%;
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid ;
  border-color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  border-radius: 5px;

  ${({ isActive, type }) => isActive && type === 'up' && css`
  background-color: ${({ theme }) => theme.colors.success_light};
  `}

  ${({ isActive, type }) => isActive && type === 'down' && css`
  background-color: ${({ theme }) => theme.colors.atention_light};
  `}

`;

export const Title = styled.Text`
  font-size: ${( RFValue(14))}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)<IconsProps>`
  color: ${({ theme, type }) => 
  type === 'up' ? theme.colors.success : theme.colors.atention};
  font-size: ${RFValue(20)}px;
  margin-right: 12px;
`;
