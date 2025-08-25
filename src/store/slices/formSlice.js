import {createSlice} from '@reduxjs/toolkit';

const formState = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    }
});

export const {changeName, changeCost} = formState.actions;
export const formReducer = formState.reducer;