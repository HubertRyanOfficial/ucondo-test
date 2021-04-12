import React, {useEffect, useState} from 'react';

// components

import {
  Container,
  FormContainer,
  FormInputContainer,
  FormInfoTitle,
  FormInputPicker,
  FormInputText,
} from './styles';

import Header from '../../components/Header';

// modules

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// * utils

import {editCount} from '../../config/store/actions';
import {ToastAndroid} from 'react-native';

var masterId = '';

function Edit({navigation, allCategories, editCount, route}) {
  // * get param from navigation

  const {data} = route.params;

  // * updates states
  // *
  // *
  // *
  // *
  // *
  // *
  // *

  const [categorieIdSelected, setCategorieIdSelected] = useState(1);
  const [categoryData, setCategoryData] = useState({
    type: '',
  });

  const [typeCategorySelected, setTypeCategorySelected] = useState('Receitas');

  const [releasesOptionSelected, setReleasesOptionSelected] = useState(true);
  const [nameNewCount, setNameNewCount] = useState('');
  const [nextChildSelected, setNextChildSelected] = useState('');

  useEffect(() => {
    getInitialStates();
  }, []);

  useEffect(() => {
    // setNextChildSelected('');
    // verifyCode();
  }, [categorieIdSelected]);

  function getInitialStates() {
    setNameNewCount(data.name);
    setReleasesOptionSelected(data.getReleases);
    setNextChildSelected(data.id);
    setCategoryData({
      type: data.type,
    });

    // * get category id from type name
    let getCategoryFromChild = allCategories.filter(
      category => category.type === data.type,
    );
    let categoryChildId = getCategoryFromChild[0].id;
    setCategorieIdSelected(categoryChildId);
  }

  function verifyCode() {
    const allChildrenCategorie = allCategories.filter(
      categories => categories.id === categorieIdSelected,
    );

    // * verify children category

    if (allChildrenCategorie && allChildrenCategorie[0]) {
      // * set type

      // * get category array data
      const categorySelected = allChildrenCategorie[0];
      const categorySelectedData = categorySelected.data;

      setCategoryData(categorySelected);
      setTypeCategorySelected(categorySelected.type);

      if (categorySelectedData && categorySelectedData.length > 0) {
        // * get last of category
        let lastChildCategory =
          categorySelectedData[categorySelectedData.length - 1];

        // * get other possibles children
        const childrenSeparator = lastChildCategory.id.split('.');
        // * get the last number of children
        let lastChildConfig = childrenSeparator[childrenSeparator.length - 1];

        // get total slices

        masterId = '';

        for (let index = 0; index < childrenSeparator.length; index++) {
          if (index < childrenSeparator.length - 1) {
            masterId = masterId + `${childrenSeparator[index]}.`;
          }
        }

        // * with releases to new child with master
        let nextChildId = Number(lastChildConfig) + 1;

        if (
          lastChildCategory &&
          lastChildCategory.getReleases &&
          nextChildId <= 999
        ) {
          let newChildId = masterId + nextChildId;
          setNextChildSelected(newChildId);
        } else {
          masterId = '';

          for (let index = 0; index < childrenSeparator.length; index++) {
            masterId = masterId + `${childrenSeparator[index]}.`;
          }
          let newNextChildId = masterId + '1';
          setNextChildSelected(newNextChildId);
        }
      } else {
        const nextChild = `${categorieIdSelected}.1`;
        setNextChildSelected(nextChild);
      }
    }
  }

  function EditCount() {
    if (!nameNewCount) {
      ToastAndroid.show(
        'Um nova conta deve conter pelo menos um nome!',
        ToastAndroid.SHORT,
      );
      return;
    }

    // *

    const arrayCategoryIndex = allCategories.findIndex(
      category => category.id === categorieIdSelected,
    );

    // * structure to new child in data list

    var editChildData = {
      id: nextChildSelected,
      name: nameNewCount,
      type: typeCategorySelected,
      getReleases: releasesOptionSelected,
    };

    // * clone the array

    var stateCategories = [...allCategories];

    if (stateCategories && stateCategories[arrayCategoryIndex]) {
      let verify = stateCategories[arrayCategoryIndex].data.filter(
        child => child.id === nextChildSelected,
      );
      let verifyIndex = stateCategories[arrayCategoryIndex].data.findIndex(
        child => child.id === nextChildSelected,
      );

      if (verify && !verify.length > 0) {
        ToastAndroid.show('O código desta conta não exite!', ToastAndroid.LONG);
        navigation.navigate('Home');
        return;
      }

      stateCategories[arrayCategoryIndex].data[verifyIndex] = editChildData;

      editCount(stateCategories);
    }

    navigation.navigate('Home');
  }

  return (
    <Container>
      <Header title="Editar Conta" type="config" headerFunction={EditCount} />

      <FormContainer>
        {/* master selected */}

        <FormInfoTitle>Conta pai</FormInfoTitle>
        <FormInputContainer>
          <FormInputPicker
            selectedValue={categorieIdSelected}
            onValueChange={itemValue => {
              setCategorieIdSelected(itemValue);
            }}>
            {allCategories.map((category, index) => (
              <FormInputPicker.Item
                key={index}
                label={`${category.id} - ${category.name}`}
                value={category.id}
              />
            ))}
          </FormInputPicker>
        </FormInputContainer>

        {/* code selected */}

        <FormInfoTitle>Código</FormInfoTitle>
        <FormInputText
          onChangeText={Text => setNextChildSelected(Text)}
          value={nextChildSelected}
          placeholder="Código"
        />

        {/* name to count */}

        <FormInfoTitle>Nome</FormInfoTitle>
        <FormInputText
          value={nameNewCount}
          onChangeText={Text => setNameNewCount(Text)}
          placeholder="Nome da conta"
        />

        {/* type selected */}

        <FormInfoTitle>Tipo</FormInfoTitle>
        <FormInputContainer>
          <FormInputPicker
            selectedValue={typeCategorySelected}
            onValueChange={itemValue => {
              setTypeCategorySelected(itemValue);
            }}>
            {allCategories.map((category, index) => {
              if (category.type == categoryData.type) {
                return (
                  <FormInputPicker.Item
                    key={index}
                    label={category.type}
                    value={category.type}
                  />
                );
              } else {
                return (
                  <FormInputPicker.Item
                    key={index}
                    label={category.type}
                    value={category.type}
                    enabled={false}
                  />
                );
              }
            })}
          </FormInputPicker>
        </FormInputContainer>

        {/* releases selected */}

        <FormInfoTitle>Lançamentos</FormInfoTitle>
        <FormInputContainer>
          <FormInputPicker
            selectedValue={releasesOptionSelected}
            onValueChange={itemValue => {
              setReleasesOptionSelected(itemValue);
            }}>
            <FormInputPicker.Item label="Sim" value={true} />
            <FormInputPicker.Item label="Não" value={false} />
          </FormInputPicker>
        </FormInputContainer>
      </FormContainer>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    allCategories: state.countReducer.allTypesCounts,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({editCount}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
// Desenvolvido por Hubert Ryan
