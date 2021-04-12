import styled from 'styled-components/native';

import {colors} from '../../../utils/global';

// * utils

import IconSearch from '../../../../assets/i_search.png';

export const Container = styled.View`
  background-color: ${colors.secundary};
  padding: 5px;
  margin: 0px 20px;
  border-radius: 50px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.inputHolder,
  placeholder: 'Pesquisar conta',
})`
  color: ${colors.inputColor};
  margin-left: 15px;
  margin-right: 45px;

  font-size: 16px;
`;

export const InputIcon = styled.Image.attrs({
  source: IconSearch,
})`
  margin-left: 10px;
`;
