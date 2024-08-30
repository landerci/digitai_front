//crie um service de eventos

import axios from 'axios';
import api from './api';

export default {
    async getEventos() {
        return api.get("/eventos").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}   
