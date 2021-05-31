import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert  } from 'react-native';
import { InputForm } from '../../components/Forms/InputForm';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles';
import { CategorySelect } from '../CategorySelect';


interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
})

export function Register() {
  const [ transactionType, setTransactionTypes ] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const {
    control,
    register, 
    handleSubmit, 
    watch, 
    formState: { errors }
  } = useForm({ 
    resolver: yupResolver(schema),
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

  function handleRegister(form: FormData) {

    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transação!');
    }

    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria!');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key, 
    }

    console.log(data);
  }
 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>
            Cadastro
          </Title>
        </Header>

        <Form>
          <Fields>
            <InputForm 
              name="name"
              control={control}
              placeholder="Nome" 
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm 
              name="amount"
              control={control}          
              placeholder="Preço"
              keyboardType="numeric" 
              error={errors.amount && errors.amount.message}
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
              title={category.name}
              onPress={handleOpenModal}
              />
            
          </Fields>
          <Button 
            title="Salvar" 
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal  visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseModal}
          
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );

} 