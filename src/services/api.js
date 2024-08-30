import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: "https://digitai-backend.vercel.app/",
});

export default api;
