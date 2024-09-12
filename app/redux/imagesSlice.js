import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for fetching images
export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await axios.get('http://localhost:3000/image-path.json');
  return response.data;
});

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;
