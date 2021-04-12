import React, {memo} from 'react';
import {SectionList} from 'react-native';

// components

import Count from '../../components/Count';
import CountChild from '../../components/CountChild';

// modules

function ListChildren({allCategories, editChild, removeChild}) {
  return (
    <SectionList
      sections={allCategories}
      keyExtractor={(item, index) => item.id}
      renderItem={({section, item}) => (
        <CountChild
          data={item}
          colorPrimary={section.color}
          editChild={editChild}
          removeChild={removeChild}
        />
      )}
      renderSectionHeader={({section}) => <Count data={section} />}
    />
  );
}

export default memo(ListChildren);
// Desenvolvido por Hubert Ryan
