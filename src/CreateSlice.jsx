import { createSlice } from '@reduxjs/toolkit';
export const CreateSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity:0 // Initialize items as an empty array
  },
  reducers: {
   addItem: (state, action) => {
    const { name, image, cost } = action.payload;
    const existingItem = state.items.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.items.push({ name, image, cost, quantity: 1 });
    }
    },
    removeItem: (state, action) => {
        let item=state.items.find((plant)=>plant.name===action.payload);
        state.items = state.items.filter(item => item.name !== action.payload);
        state.totalQuantity-=item.quantity;
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const exsiting = state.items.find(item => item.name === name);
        if (exsiting) {
            let updateCost=quantity-exsiting.quantity;
            //itemToUpdate.quantity = quantity;
            exsiting.quantity=quantity;
            state.totalQuantity+=updateCost;
        }
    },
},
});

export const { addItem, removeItem, updateQuantity } = CreateSlice.actions;

export default CreateSlice.reducer;
