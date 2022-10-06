import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "92bbf5d6-9fb7-44c5-961f-f27857d3e66b",
  },
});

export const usersAPI = {
  deleteFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  postFollow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getFriends() {
    return instance.get("users?friend=true").then((response) => response.data);
  },
  getAuth() {
    return instance.get("auth/me").then((response) => response.data);
  },
  getProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status });
  },
  login(email, password, rememberMe) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
