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

    async submitForService(data, endpoint, service_id, user_id) {
        try {
            const url = `${HOST}${endpoint}`;
            const responseService = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            await responseService.json();

            const response = await fetch(`${HOST}/api/user-services/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: user_id, serviceId: service_id }),
            });

            return response.json();

        } catch (error) {
            throw new Error('Failed to submit service:', error.message);
        }
    }
}

export default new ServicesService();