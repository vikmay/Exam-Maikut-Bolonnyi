import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInputState {
    name: string;
    email: string;
    phone: string;
}

const initialState: UserInputState = {
    name: '',
    email: '',
    phone: '',
};

const userInputSlice = createSlice({
    name: 'userInput',
    initialState,
    reducers: {
        storeUserInput: (state, action: PayloadAction<UserInputState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        },
    },
});

export const { storeUserInput } = userInputSlice.actions;

export default userInputSlice.reducer;
