import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => (name, locations) => {
    // make a request to api
    console.log(name, locations.lenght);
    
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
);