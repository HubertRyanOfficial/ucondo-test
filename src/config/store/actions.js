import {
  ADD_CHILD_COUNT,
  EDIT_CHILD_COUNT,
  REMOVE_CHILD_COUNT,
} from './actionsTypes';

export const addNewCount = value => {
  return {
    type: ADD_CHILD_COUNT,
    payload: value,
  };
};

export const editCount = value => {
  return {
    type: EDIT_CHILD_COUNT,
    payload: value,
  };
};

export const removeCount = value => {
  return {
    type: REMOVE_CHILD_COUNT,
    payload: value,
  };
};
