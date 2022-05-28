//网络请求 - 二次封装（便于更改）
import axios from 'axios'
//基地址
axios.defaults.baseURL = "http://localhost:3000"
//向外导出
export default axios