import { createSlice } from "@reduxjs/toolkit";


export const potentialArticleSlice = createSlice({
    name: 'potentialArticles',
    initialState: {
        value: [
            {
                title: 'Title of new article'
            }
        ]
    },
    reducers: {
        setPotentialArticles: (state, action) => {
            state.value = action.payload
        },
        deletePotentialArticles: (state) => {
            state.value = null  
        }
    }
})

export const {setPotentialArticles, deletePotentialArticles} = potentialArticleSlice.actions

export const selectPotentials = (state) => state.potentialArticles.value

export default potentialArticleSlice.reducer