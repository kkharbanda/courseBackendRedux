import { configureStore } from '@reduxjs/toolkit';
import { userReducer,profileReducer, subscriptionReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer,
    course:courseReducer,
    subscription:subscriptionReducer,
    admin:adminReducer
  },
});

export default store;

export const server = 'https://coursesbackend.onrender.com/api/v1';
