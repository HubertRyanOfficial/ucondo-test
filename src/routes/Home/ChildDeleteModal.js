import React, {memo, useState} from 'react';
import {Animated} from 'react-native';

// components

import {
  ChildDeleteContainer,
  ChildDeleteItemContainer,
  ChildDeleteItem,
  TrashImage,
  TrashText,
  TrashTextBold,
  OptionsContainer,
  OptionButton,
  OptionButtonText,
} from './styles';

// modules

// * utils

import TrashIcon from '../../../assets/i_trash.png';

function ChildDeleteModal({config, handleDelete}) {
  const {id, name} = config.childData;

  const [animation] = useState(new Animated.Value(0));

  if (config.modalEnable) {
    animation.setValue(0);
    Animated.spring(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  return (
    <ChildDeleteContainer
      visible={config.modalEnable}
      animated={false}
      transparent>
      <ChildDeleteItemContainer>
        <ChildDeleteItem
          as={Animated.View}
          style={{
            transform: [{scale: animation}],
          }}>
          <TrashImage source={TrashIcon} />
          <TrashText>Deseja excluir a conta </TrashText>
          <TrashTextBold>
            {id} - {name} <TrashText>?</TrashText>
          </TrashTextBold>

          <OptionsContainer>
            <OptionButton onPress={() => handleDelete(false)}>
              <OptionButtonText fullColor={false}>Não!</OptionButtonText>
            </OptionButton>
            <OptionButton onPress={() => handleDelete(true)}>
              <OptionButtonText fullColor={true}>Com certeza</OptionButtonText>
            </OptionButton>
          </OptionsContainer>
        </ChildDeleteItem>
      </ChildDeleteItemContainer>
    </ChildDeleteContainer>
  );
}

export default memo(ChildDeleteModal);
// Desenvolvido por Hubert Ryan
