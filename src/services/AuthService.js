const HOST = import.meta.env.VITE_BACK_URL

class AuthService {
    async login(email, password) {
        try {
            const response = await fetch(`${HOST}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Login failed:', error.message);
        }
    }

    async signupVerify(email, verificationCode) {
        try {
            const response = await fetch(`${HOST}/api/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    verificationCode
                })
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response;
            return data;
        } catch (error) {
            throw new Error('Signup failed:', error.message);
        }
    }

    async signup(formData) {
        try {
            const response = await fetch(`${HOST}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Signup failed:', error.message);
        }
    }
}

export default new AuthService();
