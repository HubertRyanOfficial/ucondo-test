import styled from 'styled-components/native';

// * utils

import {colors} from '../../utils/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const ListContainer = styled.View`
  background-color: ${colors.background};
  flex: 1;
  margin-top: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ListHeader = styled.View`
  padding: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ListTitle = styled.Text`
  font-size: 20px;
  color: ${colors.title};
`;
export const ListSubTitle = styled.Text`
  font-size: 14px;
  color: ${colors.texts};
`;

export const ListMain = styled.SectionList`
  flex: 1;
`;

export const ChildDeleteContainer = styled.Modal``;

export const ChildDeleteItemContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ChildDeleteItem = styled.View`
  background-color: #fff;
  padding: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const TrashImage = styled.Image``;

export const TrashText = styled.Text`
  color: ${colors.texts};
  font-size: 15px;
  margin-top: 20px;
`;

export const TrashTextBold = styled.Text`
  color: ${colors.title};
  font-size: 15px;
  font-weight: bold;
`;

export const OptionsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  padding: 0px 10px;
`;

export const OptionButton = styled.TouchableOpacity``;

export const OptionButtonText = styled.Text`
  background-color: ${props =>
    props.fullColor ? colors.pink : colors.secundary};
  color: ${props => (!props.fullColor ? colors.pink : colors.secundary)};
  padding: 10px 30px;
  border-radius: 25px;
`;

// Desenvolvido por Hubert Ryan
