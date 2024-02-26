import { configureStore } from'@reduxjs/toolkit'
import { AnimeReducer } from '../features/AnimeSlice'

export const store = configureStore({
    reducer: {
        anime: AnimeReducer
    }
})