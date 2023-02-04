import axios from 'axios';

class MemberData {

    getMemberInfo(memId) {
        // console.log(memId);
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/member/${memId}`)
    }

}

export default new MemberData();