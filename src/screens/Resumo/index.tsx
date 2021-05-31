import React, { useState } from 'react';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes

} from './styles';
import { CategorySelect } from '../../components/Forms/CategorySelect';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

export function Resumo() {
  const [ transactionType, setTransactionTypes ] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down' ) {
    setTransactionTypes(type)
  }

  return (
    <Container>
      <Header>
        <Title>
          Cadastro
        </Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome" 
          />
          <Input 
            placeholder="Preço" 
          />
          <TransactionTypes>
            <TransactionTypeButton 
              title="Income" 
              type="up"
              onPress={ () =>handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
              />
            <TransactionTypeButton 
            title="Outcome" 
            type="down"
            onPress={ () =>handleTransactionTypeSelect('down')}
            isActive={transactionType === 'down'}
            />
          </TransactionTypes>
          <CategorySelect title="Categoria" />
          
        </Fields>
        <Button title="Salvar" />
      </Form>

    </Container>
  );

}