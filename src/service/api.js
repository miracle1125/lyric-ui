import axios from 'axios';
import demoJson from './demo.json';

const config = { headers: { 'Content-Type': 'multipart/form-data' } };

export function getMusicInfo(data, session_token) {
    return axios.post(
        'http://18.117.254.76/v2/songs/analysis', 
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${session_token}`
            },
        }
    );
}
export function createUser(data) {
    return axios.post(
        'http://18.117.254.76/v2/signup', 
        data,
    );
}
export function readUser(data) {
    return axios.post(
        'http://18.117.254.76/v2/login', 
        data,
    );
}
export function getCatalogs(session_token) {
    return axios.get(
        'http://18.117.254.76/v2/catalogs',
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${session_token}`
            },
        }
    );
}
export function getCatalogById(id, session_token) {
    return axios.get(
        `http://18.117.254.76/v2/catalogs/${id}`,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${session_token}`
            },
        }
    );
}
export function getMusicInfoFromJSON() {
    return demoJson
}