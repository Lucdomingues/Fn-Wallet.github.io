import {
  SUCESS_REQUIRE,
  FAILURE_REQUIRE,
  FORM_EXPENSES,
  SUCESS_REQUIRE_TXA,
  DELETE_INFO,
} from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  txa: {},
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
  case FORM_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses, action.payload,
      ],
    };
  case SUCESS_REQUIRE_TXA:
    return {
      ...state,
      txa: action.payload,
    };
  case DELETE_INFO:
    return {
      ...state,
      expenses: [...action.id],
    };
  default:
    return state;
  }
};

export default walletReducer;
