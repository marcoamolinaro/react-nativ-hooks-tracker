import createDataContext from './createDataContext';
import trackerApi from '../api/trackerApi';

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