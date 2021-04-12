import styled from 'styled-components/native';

// * utils

import IconLittleTrash from '../../../assets/i_little_trash.png';

import {colors} from '../../utils/global';

export const Container = styled.View`
  background-color: ${colors.secundary};
  margin: 5px 20px;
  padding: 10px 20px;
  border-radius: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const ButtonIcon = styled.Image.attrs({
  source: IconLittleTrash,
})``;
