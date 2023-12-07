import { createSlice, configureStore } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        // 사용할 객체 정보
        // address_name : "",
        // address_avc : "",
        // address_city : "",
        // address_detail : "",
        // address_phone_num :""
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
        addressReducer,
    },
});

export default Configstore;