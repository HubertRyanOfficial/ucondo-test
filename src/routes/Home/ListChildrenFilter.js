import React, {memo} from 'react';
import {FlatList} from 'react-native';

// components

import Count from '../../components/Count';
import CountChild from '../../components/CountChild';

// modules

function ListChildrenFilter({allChildren, editChild, removeChild, searchText}) {
  return (
    <FlatList
      data={allChildren}
      keyExtractor={(item, index) => item.id}
      renderItem={({item}) =>
        item.name.includes(searchText) ? (
          <CountChild
            data={item}
            colorPrimary={item.color}
            editChild={editChild}
            removeChild={removeChild}
          />
        ) : null
      }
    />
  );
}

export default memo(ListChildrenFilter);
// Desenvolvido por Hubert Ryan
