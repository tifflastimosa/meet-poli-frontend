import axios from 'axios';

class StateData {

    // parameter to be passed in is abbreviated state
    getHouseRepsByState(state) {
        console.log(state);
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/house/${state}/current`)
    }

    getSenateMembersByState(state) {
        console.log(state);
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/senate/${state}`)
    }

}

export default new StateData();