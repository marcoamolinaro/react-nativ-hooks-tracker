import createDateContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api request to sign up with that email and password


        // if we sign up, modify our state and say that we are autenticated

        // if sign up fails we probably need to reflect an error message
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
    { isSignedIn: false}
);