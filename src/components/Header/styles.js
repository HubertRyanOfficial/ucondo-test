import styled from 'styled-components/native';

// * utils

import {colors} from '../../utils/global';

export const Container = styled.View`
  padding: 5px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.secundary};
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 40px;
  color: ${colors.secundary};
`;

export const ButtonIcon = styled.Image``;

export const BackContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
