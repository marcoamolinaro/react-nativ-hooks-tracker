import {useState, useEffect} from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shoulTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, 
            callback
            );
            setSubscriber(sub);
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        if (shoulTrack) {
            startWatching();
        } else {
           subscriber.remove();
           setSubscriber(null);
        }
    }, [shoulTrack]);

    return [err];
}