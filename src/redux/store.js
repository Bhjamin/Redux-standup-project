import { configureStore } from "@reduxjs/toolkit";
import potentialArticles from "./potentialArticles";
import displayArticle from "./displayArticle";



export default configureStore({
    reducer: {
        potentialArticles: potentialArticles,
        displayArticle: displayArticle
    }
})
