const HOST = import.meta.env.VITE_BACK_URL

class AuthService {
    async login({ email, password }) {
        try {
            const response = await axios.post(`${HOST}/api/users/login`, {
                email,
                password
            });

            const token = response.data.token;
            return token;
        } catch (error) {
            throw new Error('Login failed:', error);
        }
    }

    async signup({ email, verificationCode }) {
        try {
            const response = await axios.post(`${HOST}/api/verify`, {
                email: email,
                verificationCode: verificationCode
            });

            const token = response.data.token;
            return token;
        } catch (error) {
            throw new Error('Signup failed:', error);
        }
    }
}

export default new AuthService();