import { SUCESS_REQUIRE, FAILURE_REQUIRE } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUCESS_REQUIRE:
    return {
      ...state,
      currencies: action.payload,
    };
  case FAILURE_REQUIRE:
    return {
      error: action.error,
    };
  default:
    return state;
  }
};

export default walletReducer;
