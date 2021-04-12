// * utils

import {
  ADD_CHILD_COUNT,
  EDIT_CHILD_COUNT,
  REMOVE_CHILD_COUNT,
} from '../actionsTypes';

//

const INITIAL_STATE = {
  allTypesCounts: [
    {
      id: 1,
      name: 'Receitas',
      color: '#1BA803',
      type: 'Receitas',
      getReleases: false,
      data: [],
    },
    {
      id: 2,
      name: 'Despesas',
      color: '#E28856',
      type: 'Despesas',
      getReleases: false,
      data: [],
    },
    {
      id: 3,
      name: 'Ideias',
      color: '#2274A5',
      type: 'Ideias',
      getReleases: false,
      data: [],
    },
  ],
  totalCategories: 3,
};

//

export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CHILD_COUNT:
      return {
        ...state,
        allTypesCounts: action.payload,
      };
    case EDIT_CHILD_COUNT:
      return {
        ...state,
        allTypesCounts: action.payload,
      };
    case REMOVE_CHILD_COUNT:
      return {
        ...state,
        allTypesCounts: action.payload,
      };
    default:
      return state;
  }
}
