const reducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { ...state, balance: state.balance + action.payload };
    case 'WITHDRAW':
      return { ...state, balance: state.balance - action.payload };
    case 'CHANGE_ADRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
export default reducer;
