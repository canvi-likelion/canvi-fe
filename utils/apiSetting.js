import axios from 'axios'

const requestApi = axios.create({
    baseURL: "https://hama.anhye0n.com",
    withCredentials: true,
})

// 매 요청마다 토큰 검증
// requestApi.interceptors.request.use(function (config) {
//     const token = getCookie('token');
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
// });

export { requestApi };