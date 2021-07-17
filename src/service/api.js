import axios from 'axios';
import demoJson from './demo.json';

const config = { headers: { 'Content-Type': 'multipart/form-data' } };

export function getMusicInfo(data, session_token) {
    return axios.post(
        'http://18.117.254.76/songs/analysis', 
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Cookie': `session_token=${session_token}`
            },
        }
    );
}
export function createUser(data) {
    return axios.post(
        'http://18.117.254.76/signup', 
        data,
    );
}
export function readUser(data) {
    return axios.post(
        'http://18.117.254.76/login', 
        data,
    );
}
export function getMusicInfoFromJSON() {
    return demoJson
}