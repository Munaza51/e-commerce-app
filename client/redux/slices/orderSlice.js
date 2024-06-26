import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/api';

export const createOrder = createAsyncThunk('orders/createOrder', async (token) => {
  const response = await axios.post('/orders', { token });
  return response.data;
});

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (userId) => {
  const response = await axios.get(`/orders/${userId}`);
  return response.data;
});

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default orderSlice.reducer;
