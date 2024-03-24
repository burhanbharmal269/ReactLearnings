import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer:{
        user:userSlice
    }
})