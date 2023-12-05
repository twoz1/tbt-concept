import { createSlice, configureStore } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        // 사용할 객체 정보
        address_id: null,
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});

export const { setAddress } = addressSlice.actions;
export const addressReducer = addressSlice.reducer;



const Configstore = configureStore({
    reducer: {
        address: addressReducer,
    },
});

export default Configstore;