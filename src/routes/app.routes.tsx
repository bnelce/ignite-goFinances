import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Resumo } from '../screens/Resumo';
import { Platform } from 'react-native';
import { CategorySelect } from '../screens/CategorySelect';


const Tabs = createBottomTabNavigator()

export function AppRoutes() {

  const theme = useTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.text,
        labelPosition: "beside-icon",
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88, 
        }
      }}
    >
      <Tabs.Screen 
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Tabs.Screen 
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="attach-money"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <Tabs.Screen 
        name="Resumo"
        component={CategorySelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="pie-chart"
              size={size}
              color={color}
            />
          ))
        }}
      />
      
    </Tabs.Navigator>
    );
}