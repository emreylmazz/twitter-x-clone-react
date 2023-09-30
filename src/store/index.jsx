import {configureStore} from '@reduxjs/toolkit';
import auth from './auth';
import modal from './auth/modal';
import appearance from './appearance';

const store = configureStore({
    reducer: {
        auth,
        modal,
        appearance,
    }
})

export default store