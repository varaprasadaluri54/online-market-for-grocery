import axios from "axios";

// const BASE_URL = "http://10.81.3.109:8080"; // Venkat pc

// const BASE_URL = "http://10.81.3.179:2022"; // umer pc

// const BASE_URL = "http://10.81.3.209:2022"; // umer pc
// const BASE_URL = "http://10.81.4.193:2022"; // srikanth pc
const BASE_URL = "http://10.81.4.242:2022"; // sai pavan pc
// const BASE_URL = "http://10.81.3.30:9090"; // charan pc
//Header

//post
const LOGIN_API_URL = `${BASE_URL}/api/login`;

const REGISTER_API_URL = `${BASE_URL}/api/user/register`;
const FORGOT_API_URL = `${BASE_URL}/api/verify`;
const REGISTER_OTP_API_URL = `${BASE_URL}/api/user/sendOtp`;
const OTP_API_URL = `${BASE_URL}/api/sendOtp`;
const RECEIPT_API_URL = `${BASE_URL}/getResponse`;
const RECEIPT_DOWNLOAD_API_URL = `${BASE_URL}/user/pdf/generate`;
//delete
export function auth() {
  const token = sessionStorage.getItem("Access_Token");
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

export default new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  register(data) {
    return axios.post(REGISTER_API_URL, data);
  }

  sendOtp(data) {
    return axios.post(REGISTER_OTP_API_URL, data);
  }
  Otp(data) {
    return axios.post(OTP_API_URL, data);
  }
  password(data) {
    return axios.post(FORGOT_API_URL, data);
  }
  getReceipt() {
    return axios.post(RECEIPT_API_URL);
  }
  download() {
    return axios.get(RECEIPT_DOWNLOAD_API_URL, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "arraybuffer",
    });
  }
})();
