import { configureStore } from '@reduxjs/toolkit';
// Import your slices here – you might change these based on your domain grouping
import generalReducer from '../slices/portal/settings/general.slice';
import notificationsReducer from '../slices/portal/settings/notifications.slice';
// ... import other slices as needed

export const store = configureStore({
    reducer: {
        general: generalReducer,
        notifications: notificationsReducer,
        // ... add your other reducers
    },
});

// Optional: Export types for usage elsewhere in your app.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
