import axios from "axios";

// const BASE_URL = "http://10.81.3.109:8080"; // Venkat pc

// const BASE_URL = "http://10.81.3.179:2022"; // umer pc

const BASE_URL = "http://10.81.3.209:2022"; // umer pc
// const BASE_URL = "http://10.81.3.30:9090"; // charan pc
//Header

//get
const ALL_USER_API = `${BASE_URL}/admin/getAllNormalUsers`;
const CURRENT_USER_API = `${BASE_URL}/auth/current-user`;
const ALL_DOCTOR_API = `${BASE_URL}/admin/getAllDoctors`;
const VIEW_CURRENT_APPOINTMENT_API = `${BASE_URL}/api/currentDate`;
const VIEW_UPCOMING_APPOINTMENT_API = `${BASE_URL}/api/upcomingappoinments`;
const VIEW_PATIENT_DETIALS_API = `${BASE_URL}/api/findProfile/`;
///fulldetails`;
//
const GET_SLOT_DETAILS_API = `${BASE_URL}/appointment/get`;
const BILL_DATA_API = `${BASE_URL}/api/getBill/2/1`;
const BOOK_SLOT_API = `${BASE_URL}/appointment/book/`;
const UNBOOK_SLOT_API = `${BASE_URL}/appointment/unbook/`;
//post
const LOGIN_API_URL = `${BASE_URL}/auth/login`;
///authenticate`;
//

const REGISTER_API_URL = `${BASE_URL}/api/register`;
const FORGOT_API_URL = `${BASE_URL}/smsForgot/forgot-password`;
const VERIFYOTP_API_URL = `${BASE_URL}/smsForgot/verify-otp`;
const NEWPASSWORD_API_URL = `${BASE_URL}/smsForgot/change-forgot-password`;
const MAKE_BILL_API_URL = `${BASE_URL}/api/makeBills/16`;
const ADD_DOCTOR_API_URL = `${BASE_URL}/admin/addDoctor`;
const ADD_NURSE_API_URL = `${BASE_URL}/admin/addNurse`;

//put
const CHANGE_PASSWORD = `${BASE_URL}/user/changePassword`;
const EDIT_PROFILE = `${BASE_URL}/user/profileInfoUpdate`;

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

  currentUser() {
    return axios.get(CURRENT_USER_API, auth());
  }

  changePassword(data) {
    return axios.put(CHANGE_PASSWORD, data, auth());
  }
  editProfile(data) {
    return axios.put(EDIT_PROFILE, data, auth());
  }
  forgotPwd(data) {
    return axios.post(FORGOT_API_URL, data);
  }
  verifyotp(data) {
    return axios.post(VERIFYOTP_API_URL, data);
  }
  newpassword(data) {
    return axios.post(NEWPASSWORD_API_URL, data);
  }
  billGenerate(data) {
    return axios.post(MAKE_BILL_API_URL, data, auth());
  }
  billData() {
    return axios.get(BILL_DATA_API, auth());
  }
  getSlotDetails() {
    return axios.get(GET_SLOT_DETAILS_API, auth());
  }
  bookSlot(data) {
    return axios.get(`${BOOK_SLOT_API}${data}`, auth());
  }
  unBookSlot(data) {
    return axios.get(`${UNBOOK_SLOT_API}${data}`, auth());
  }

  addDoctor(data) {
    return axios.post(`${ADD_DOCTOR_API_URL}`, data, auth());
  }
  addNurse(data) {
    return axios.post(`${ADD_NURSE_API_URL}`, data, auth());
  }
  getAllUser(page, rowsPerPage) {
    return axios.get(
      `${ALL_USER_API}?pageNumber=${page}&pageSize=${rowsPerPage}`,
      auth()
    );
  }
  getAllDoctors(page, rowsPerPage) {
    return axios.get(
      `${ALL_DOCTOR_API}?pageNumber=${page}&pageSize=${rowsPerPage}`,
      auth()
    );
  }
  getCurrentAppointment() {
    return axios.get(`${VIEW_CURRENT_APPOINTMENT_API}`, auth());
  }
  getUpcomingAppointment() {
    return axios.get(`${VIEW_UPCOMING_APPOINTMENT_API}`, auth());
  }
  getPatientDetails(id) {
    return axios.get(`${VIEW_PATIENT_DETIALS_API}${id}`, auth());
  }
})();
