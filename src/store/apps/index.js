import { combineReducers } from '@reduxjs/toolkit'

// ** Reducers
// import chat from './chat'
// import email from './email'
// import invoice from './invoice'
// import calendar from './calendar'
// import permissions from './permissions'
// import dashboard from './dashboard'
import sellerProfile from './sellerProfile'
// import products from './products'
// import lists from './lists'
// import orders from './orders'

const allReducers = combineReducers({
  // chat,
  // email,
  // invoice,
  // calendar,
  // permissions,
  // dashboard,
  sellerProfile,
  // products,
  // lists,
  // orders
})

export default allReducers
