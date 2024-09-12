// imagesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ImageStatus } from '@/app/types/enums'

interface ImageState {
  images: any[];
  status: ImageStatus;
  error: string | null;
}

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await axios.get('https://imagekit-tst.vercel.app/image-path.json');
  return response.data;
});

const initialState: ImageState = {
  images: [],
  status: ImageStatus.IDLE,
  error: null,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = ImageStatus.LOADING;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = ImageStatus.SUCCEEDED;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = ImageStatus.FAILED;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default imagesSlice.reducer;
