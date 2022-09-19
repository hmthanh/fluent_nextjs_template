import axios from "axios";
import { API_URL } from "../../global/config/constants";
export const fetchAllApps = () => axios.post(`${API_URL}/alerts`);
export const disableAlert = (appid: number) => axios.post(`${API_URL}/alert?a=OFF&id=${appid}`);
export const enableAlert = (appid: number) => axios.post(`${API_URL}/alert?a=ON&id=${appid}`);