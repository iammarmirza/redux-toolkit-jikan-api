import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const BASE_URL = 'https://api.jikan.moe/v4/anime'
export const fetchAnime = createAsyncThunk('fetchAnime', async (text) => {
    const response = await fetch(`${BASE_URL}?q=${text}&sfw`)
    return response.json()
})

const initialState = {
    text: '',
    animeData: [],
    isLoading: false,
    isError: false,
    isSearched: false
}

export const AnimeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAnime.pending, (state) => {
            state.isLoading = true,
                state.isError = false,
                state.isSearched = false,
                state.text = ''
        })
        builder.addCase(fetchAnime.fulfilled, (state, action) => {
            state.animeData = action.payload.data,
                state.isLoading = false,
                state.isError = false,
                state.isSearched = true
        })
        builder.addCase(fetchAnime.rejected, (state) => {
            state.isLoading = false,
                state.isError = true,
                state.animeData = initialState.animeData
        })
    }
})

export const { changeText } = AnimeSlice.actions
export const AnimeReducer = AnimeSlice.reducer