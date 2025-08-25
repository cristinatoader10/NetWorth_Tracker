import {createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
   name: "cars",
   initialState: {
       searchTerm: "",
       data: []
   },
    reducers: {
       changeSearchTerm: (state, action) => {
           state.searchTerm = action.payload;
       },
        addCar: (state, action) => {
           state.data.push({
               name: action.payload.name,
               cost: action.payload.cost,
               id: nanoid()
           });
           console.log(state.data.length);
        },
        removeCar: (state, action) => {
          const updated = state.data.filter((car) => {
              return car.id !== action.payload;
          })
            state.data = updated;
            console.log(state.data.length);
        }
    }
});

export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions;
export const carsReducer =  carsSlice.reducer;