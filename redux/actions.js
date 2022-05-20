export const depositAction = (amount) => {
  return {
    type: 'DEPOSIT',
    payload: amount,
  };
};

export const withdrawAction = (amount) => {
  return {
    type: 'DEPOSIT',
    payload: amount,
  };
};

export const changeAdressAction = (newAdress) => {
  return {
    type: 'CHANGE_ADRESS',
    payload: newAdress,
  };
};
