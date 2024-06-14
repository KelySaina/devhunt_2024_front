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
}

export default new ServicesService();