export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const removeItem = (itemName) => ({
  type: 'REMOVE_ITEM',
  payload: itemName,
});
