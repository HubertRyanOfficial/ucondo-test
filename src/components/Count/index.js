import React, {memo} from 'react';

// components

import {Container, Title, ButtonContainer, ButtonIcon} from './styles';

// modules

function Count({data}) {
  if (!data) return null;

  return (
    <Container>
      <Title
        style={{
          color: data.color,
        }}>
        {`${data.id} - ${data.name}`}
      </Title>
    </Container>
  );
}

// export default memo(Count);
export default Count;
// Desenvolvido por Hubert Ryan
