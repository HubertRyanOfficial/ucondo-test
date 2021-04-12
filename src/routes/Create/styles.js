import styled from 'styled-components/native';

// modules

import {Picker} from '@react-native-picker/picker';

// * utils

import {colors} from '../../utils/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const FormContainer = styled.ScrollView`
  background-color: ${colors.background};
  flex: 1;
  margin-top: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const FormInputContainer = styled.View`
  background-color: ${colors.secundary};

  margin: 10px 0px;
  border-radius: 12px;
`;

export const FormInfoTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.subTitles};
`;

export const FormInputPicker = styled(Picker)`
  color: ${colors.texts};
`;

export const FormInputText = styled.TextInput.attrs({
  placeholderTextColor: colors.texts,
})`
  background-color: ${colors.secundary};

  margin: 10px 0px;
  border-radius: 12px;
  padding: 13px 20px;
  font-size: 16px;
`;

// Desenvolvido por Hubert Ryan
