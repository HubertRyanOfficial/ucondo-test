import React from 'react';

// components

import {View} from 'react-native';

// * utils

import {colors} from '../../utils/global';

function Loading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}></View>
  );
}

export default Loading;
// Desenvolvido por Hubert Ryan
