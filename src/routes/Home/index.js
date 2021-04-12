import React, {useEffect, useRef, useState} from 'react';

import {SectionList} from 'react-native';

// components

import {
  Container,
  ListContainer,
  ListHeader,
  ListTitle,
  ListSubTitle,
} from './styles';

import Header from '../../components/Header';
import SearchInput from './SeachInput';
import ChildDeleteModal from './ChildDeleteModal';
import ListChildren from './ListChildren';

// modules

import {removeCount} from '../../config/store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListChildrenFilter from './ListChildrenFilter';

function Home({navigation, allCategories, removeCount}) {
  const [totalChildren, setTotalChildren] = useState(0);
  const [deleteChildConfig, setDeleteChildConfig] = useState({
    childData: {},
    modalEnable: false,
  });
  const [searchText, setSearchText] = useState('');
  const [typeList, setTypeList] = useState('categories');

  //

  const childrenDataFilter = useRef([]);

  // * verify and cacule total childs

  useEffect(() => {
    getTotalChilds();
  }, [allCategories]);

  function getTotalChilds() {
    var total = 0;
    allCategories.forEach(category => {
      if (category && category.data && category.data.length >= 0) {
        total = total + category.data.length;
        setTotalChildren(total);
      }
    });
  }

  // * remove child and confirm option modal

  function removeChild(data) {
    console.log(data);
    setDeleteChildConfig({childData: data, modalEnable: true});
  }

  function removeChildConfirm(childToDelete) {
    if (childToDelete) {
      const arrayCategoryIndex = allCategories.findIndex(
        category => category.type === deleteChildConfig.childData.type,
      );

      var stateCategories = [...allCategories];

      if (stateCategories && stateCategories[arrayCategoryIndex]) {
        stateCategories[arrayCategoryIndex].data = stateCategories[
          arrayCategoryIndex
        ].data.filter(child => child.id != deleteChildConfig.childData.id);

        removeCount(stateCategories);
      }
    }

    setDeleteChildConfig({childData: {}, modalEnable: false});
    goDefault();
  }

  // * go to edit child route

  function editChild(data) {
    navigation.navigate('Edit', {data});
  }

  function handleSearchValue(value) {
    childrenDataFilter.current = [];
    setSearchText(value);

    // * change type list to show only childs components
    if (searchText && !searchText == '' && searchText.length > 1) {
      if (typeList !== 'filter') setTypeList('filter');

      allCategories.forEach(categories => {
        childrenDataFilter.current.push(...categories.data);
      });

      setTotalChildren(childrenDataFilter.current.length);
    } else if (typeList === 'filter') {
      goDefault();
    }
  }

  function goDefault() {
    setTypeList('categories');
    setSearchText('');
    getTotalChilds();
  }

  return (
    <Container>
      <Header title="Plano de Contas" type="home" />
      <SearchInput
        searchText={searchText}
        handleSearchValue={handleSearchValue}
      />
      <ListContainer>
        <ListHeader>
          <ListTitle>Listagem</ListTitle>
          <ListSubTitle>{totalChildren} registros</ListSubTitle>
        </ListHeader>

        {typeList === 'categories' ? (
          <ListChildren
            allCategories={allCategories}
            removeChild={removeChild}
            editChild={editChild}
          />
        ) : (
          <ListChildrenFilter
            allChildren={childrenDataFilter.current}
            removeChild={removeChild}
            editChild={editChild}
            searchText={searchText}
          />
        )}
      </ListContainer>

      <ChildDeleteModal
        config={deleteChildConfig}
        handleDelete={removeChildConfirm}
      />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    allCategories: state.countReducer.allTypesCounts,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({removeCount}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// Desenvolvido por Hubert Ryan
