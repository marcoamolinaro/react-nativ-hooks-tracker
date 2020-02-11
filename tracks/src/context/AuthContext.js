import createDateContext from './createDataContext';
import trackerApi from '../api/trackerApi';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload};
        default:
            return state;
    }
};


const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch(err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.'})
        }
    };
};

const signin = (dispatch) => {
    return ({email, password}) => {
        // try signin
        // handle sucess by updating state
        // handle failure by showing error message (somehow)
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sign out
    };
};

export const { Provider, Context } = createDateContext(
    authReducer,
    {signin, signout, signup},
    { isSignedIn: false, errorMessage: ''}
);