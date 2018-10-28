import { Email_CHANGED } from '../action/types';

const INITIAL_STATE = {
  email: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Email_CHANGED:
      console.log('holla');
    default:
      return state;
  }
};
