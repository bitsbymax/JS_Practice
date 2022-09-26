import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { moveRight } from './position';

const amountSlice = createSlice({
  name: 'amount',
  initialState: 0,
  reducers: {
    add: (amount, action: PayloadAction<number>) => amount + action.payload,
    take: (amount, action: PayloadAction<number>) => amount - action.payload,
    clear: () => 0
  },
  extraReducers: (builder) => {
    builder.addCase(moveRight.type, (value) => value + 1);
  }//extraReducers дає можливість додати до slice екшени, які не були зареєстровані в поточних reducers, або обробити екшени, для яких нам непортібні екшен кріейтори
});

export const { actions } = amountSlice;
export default amountSlice.reducer;
