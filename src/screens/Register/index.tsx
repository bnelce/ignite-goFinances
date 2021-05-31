import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes

} from './styles';
import { CategorySelect } from '../CategorySelect';

export function Register() {
  const [ transactionType, setTransactionTypes ] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionTypeSelect(type: 'up' | 'down' ) {
    setTransactionTypes(type)
  }


  function handleOpenModal(){
    setCategoryModalOpen(true);
  }
  
  function handleCloseModal(){
    setCategoryModalOpen(false);
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
          <CategorySelectButton 
            title="Categoria"
            onPress={handleOpenModal}
            />
          
        </Fields>
        <Button title="Salvar" />
      </Form>

      <Modal  visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseModal}
        
        />
      </Modal>

    </Container>
  );

}