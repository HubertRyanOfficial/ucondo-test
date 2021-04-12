import React, {memo} from 'react';

// components

import {Container, Input, InputIcon} from './styles';

// modules

function SeachInput({searchText, handleSearchValue}) {
  return (
    <Container>
      <InputIcon />
      <Input value={searchText} onChangeText={handleSearchValue} />
    </Container>
  );
}

export default memo(SeachInput);
// Desenvolvido por Hubert Ryan
