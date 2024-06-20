import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState{
    word: string;
}

const initialState: SearchState = {
    word: "",
}

const searchSlice = createSlice({
    name: "searchWord",
    initialState,
    reducers:{
        inputWord : (state,actions:PayloadAction<string>)=>{
            state.word = actions.payload;
        }
    },
});

export const {inputWord} = searchSlice.actions

export default searchSlice.reducer;