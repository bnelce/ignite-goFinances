import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container, 
  Header,  
  Icon,  
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HighlightCards,
  Transactions,
  Title
 } from './styles';


export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/2302109?v=4'}} 
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Abner</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>        
      </Header>
      <HighlightCards>

        <HighlightCard 
          type="up"
          title="Entrada" 
          amount="R$ 17.000.90" 
          lastTransaction="Última entrada dia 13 de abril"/>
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 17.000.90" 
          lastTransaction="Última entrada dia 13 de abril"/>
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 17.000.90" 
          lastTransaction="Última entrada dia 13 de abril"/>
      </HighlightCards>
      <Transactions>
        <Title>
          Listagem
        </Title>
      </Transactions>
    </Container>
  );
}
