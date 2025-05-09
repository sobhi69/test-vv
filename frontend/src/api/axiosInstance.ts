import axios from 'axios'

const axiosInstance = axios.create({
    "baseURL":"https://test-vv-backend-1wokbmihn-sobhi69s-projects.vercel.app/api",
    withCredentials:true
})

export default axiosInstance
