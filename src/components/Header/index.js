import React, {memo} from 'react';

// components

import {
  Container,
  Title,
  ButtonContainer,
  ButtonText,
  ButtonIcon,
  BackContainer,
} from './styles';

// modules

import {useNavigation} from '@react-navigation/native';

// * utils

import IconCompleted from '../../../assets/i_completed.png';
import IconBack from '../../../assets/i_back.png';

function Header({title, type, headerFunction = null}) {
  const navigation = useNavigation();

  if (type === 'config') {
    return (
      <Container>
        <BackContainer>
          <ButtonContainer onPress={() => navigation.navigate('Home')}>
            <ButtonIcon source={IconBack} />
          </ButtonContainer>
          <Title style={{marginLeft: 15}}>{title}</Title>
        </BackContainer>
        <ButtonContainer onPress={() => headerFunction()}>
          <ButtonIcon source={IconCompleted} />
        </ButtonContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ButtonContainer onPress={() => navigation.navigate('Create')}>
        <ButtonText>+</ButtonText>
      </ButtonContainer>
    </Container>
  );
}

export default memo(Header);
// Desenvolvido por Hubert Ryan
