import {createSlice} from '@reduxjs/toolkit';
import {addCar} from "./carsSlice.js"

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
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.cost = 0;
            state.name = "";
        });
    }
});

export const {changeName, changeCost} = formState.actions;
export const formReducer = formState.reducer;