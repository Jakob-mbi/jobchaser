import { createSlice } from "@reduxjs/toolkit";

interface categoryState{
    words: Array<string>;
}

const initialState: categoryState = {
    words: [],
}

const categorySlice = createSlice({
    name: "searchCategory",
    initialState,
    reducers:{
        inputReact: (state)=>{
            state.words.push('react')
        },
        inputVue: (state)=>{
            state.words.push('vue')
        },
        inputSvelt: (state)=>{
            state.words.push('svelt')
        },
        resetReact: (state)=>{
            state.words.splice(resetCategory(state.words,'react'),1)
        },
        resetVue: (state)=>{
            state.words.splice(resetCategory(state.words,'vue'),1)
        },
        resetSvelt: (state)=>{
            state.words.splice(resetCategory(state.words,'svelt'),1)
        }
    },
});
export const{inputReact,inputVue,inputSvelt,resetReact,resetVue,resetSvelt} = categorySlice.actions;
export default categorySlice.reducer;

function resetCategory(wordsArray:Array<string>, category:string):number
{
    const index = wordsArray.indexOf(category);
    return index
}