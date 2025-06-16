const initialState = {
  order: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.order.find(item => item.name === action.payload.name);
      if (existingItem) {
        return {
          ...state,
          order: state.order.map(item =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          order: [...state.order, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        order: state.order.filter(item => item.name !== action.payload),
      };
    default:
      return state;
  }
};

export default orderReducer;
