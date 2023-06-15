import { configureStore } from '@reduxjs/toolkit';
import { userReducer,profileReducer, subscriptionReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer,
    course:courseReducer,
    subscription:subscriptionReducer
  },
});

export default store;

export const server = 'https://coursesbackend.onrender.com/api/v1';
