import axios from 'axios';
import demoJson from './demo.json';

const config = { headers: { 'Content-Type': 'multipart/form-data' } };

export function getMusicInfo(data) {
    return axios.post(
        'http://18.117.254.76/songs/analysis', 
        data,
        config
    );
}

export function getMusicInfoFromJSON() {
    return demoJson
}