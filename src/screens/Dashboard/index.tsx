import React from 'react';
import { 
  Container, 
  Header,  
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper
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
        </UserWrapper>
      </Header>
    </Container>
  );
}
