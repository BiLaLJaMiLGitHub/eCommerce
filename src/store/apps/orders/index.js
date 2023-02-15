import toast from 'react-hot-toast'

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getOrdersList, getOrderDetail, updateStatus} from 'src/apis/orders'

// ** get orders List
export const getOrders = createAsyncThunk('orders/getOrders', async params => {
    const response = await getOrdersList(params)
    const {data} = response
    return data
})

// ** get order detail
export const getOrder = createAsyncThunk('orders/getOrder', async (order_id) => {
    const response = await getOrderDetail(order_id)
    const {data} = response
    return data
})

// ** update order status
export const updateOrderStatus = createAsyncThunk('orders/updateOrderStatus', async (payload) => {
    const response = await updateStatus(payload.order_item_id, payload.status)
    const {data} = response
    return data
})


// Reducer to Get update data from action and store it in state
export const orders = createSlice({
    name: 'orders',
    initialState: {
        list: [],
        error: '',
        total: '',
        awaiting: '',
        processed: '',
        shipped: '',
        delivered: '',
        cancelled: '',
        returned: ''
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getOrders.fulfilled, (state, action) => {
                state.list = action.payload.data
                state.error = action.payload.error
                state.total = action.payload.total
                state.awaiting = action.payload.awaiting
                state.processed = action.payload.processed
                state.shipped = action.payload.shipped
                state.delivered = action.payload.delivered
                state.cancelled = action.payload.cancelled
                state.returned = action.payload.returned
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.list = action.payload.data
                state.error = action.payload.error
                state.total = action.payload.total
                state.awaiting = action.payload.awaiting
                state.processed = action.payload.processed
                state.shipped = action.payload.shipped
                state.delivered = action.payload.delivered
                state.cancelled = action.payload.cancelled
                state.returned = action.payload.returned
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                if (!action.payload.error) {
                    toast.success('Status updated successfully', {position: 'top-right'})
                } else {
                    toast.error(action.payload.message, {position: 'top-right'})
                }
            })


    }
})

export default orders.reducer
