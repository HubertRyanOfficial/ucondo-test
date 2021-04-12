import React, {useState} from 'react';
import {Animated} from 'react-native';
// components

import {Container, Title, ButtonContainer, ButtonIcon} from './styles';

// modules

function CountChild({data, colorPrimary, removeChild, editChild}) {
  if (!data) return null;

  const [animation] = useState(new Animated.Value(0));

  Animated.spring(animation, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  }).start();

  return (
    <Container
      as={Animated.View}
      style={{
        opacity: animation,
        transform: [
          {
            scale: animation,
          },
        ],
      }}>
      <ButtonContainer onPress={() => editChild(data)}>
        <Title
          style={{
            color: colorPrimary,
          }}>
          {`${data.id} - ${data.name}`}
        </Title>
      </ButtonContainer>
      <ButtonContainer onPress={() => removeChild(data)}>
        <ButtonIcon />
      </ButtonContainer>
    </Container>
  );
}

// export default memo(CountChild);
export default CountChild;
// Desenvolvido por Hubert Ryan
