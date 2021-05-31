import React from 'react';
// import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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
  Title,
  TransactionList
 } from './styles';

 export interface DataListProps extends TransactionCardProps {
   id: string
 }

export function Dashboard() {

  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 1.200,00",
    category: {
     name: 'Vendas',
     icon: 'coffee',
     },
    date: "30/05/2021"
  },
  {
    id: '2',
    type: 'negative',
    title: "Mercantil",
    amount: "R$ 1.200,00",
    category: {
     name: 'Compras',
     icon: 'shopping-bag',
     },
    date: "30/05/2021"
  },
  {
    id: '3',
    type: 'positive',
    title: "CBMCE",
    amount: "R$ 5.200,00",
    category: {
     name: 'Salário',
     icon: 'dollar-sign',
     },
    date: "30/05/2021"
  }
];

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
          lastTransaction="Última entrada dia 25 de abril"/>
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 10.000.90" 
          lastTransaction="Última entrada dia 31 de abril"/>
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 7.000.90" 
          lastTransaction="Última entrada dia 13 de abril"/>
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor = { item => item.id }
          renderItem ={ ({ item }) => <TransactionCard data= {item}/>}
        />
          
      </Transactions>
    
    </Container>
  );
}
