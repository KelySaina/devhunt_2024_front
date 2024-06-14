const HOST = import.meta.env.VITE_BACK_URL

class ServicesService {
    async getServices() {
        try {
            const response = await fetch(`${HOST}/api/services`);
            return response.json();
        } catch (error) {
            throw new Error('Failed to get services:', error.message);
        }
    }

    async submitForService(data, endpoint) {
        try {
            const url = `${HOST}${endpoint}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(response);
            return response.json();
        } catch (error) {
            throw new Error('Failed to submit service:', error.message);
        }
    }
}

export default new ServicesService();