import axios from "axios";

class UserService {
    static BASE_URL = "http://localhost:1010"

    static async login(email, password) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, { email, password });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async register(userData){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/register`, userData);
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    /**AUTHENTICATION CHECKER */
    static logout() {
        localStorage.removeItem('token');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }
}

export default UserService;
