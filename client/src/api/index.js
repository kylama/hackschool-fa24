import axios from 'axios';

const serverURL = 'http//localhost:3000';

const TravelApi = {
    getTrip: () => axios.get(`${serverURL}/api/trip`),

    postTrip: (payload) => axios.get(`${serverURL}/api/trip`, payload),

    getActivity: () => axios.get(`${serverURL}/api/activity`),

    postActivity: (payload) => axios.get(`${serverURL}/api/activity`, payload)
}

export default TravelApi;