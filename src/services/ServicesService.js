const HOST = import.meta.env.VITE_BACK_URL
import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

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

    async getServicesDirect() {
        try {
            const { data, error } = await supabase
                .from('services')
                .select('*')
            if (error) {
                throw error;
            }
            return data || [];
        } catch (error) {
            throw error;
        }
    }

    async updateState(service_id, state) {
        try {
            const { data, error } = await supabase
                .from('services')
                .update({ state: state })
                .eq('service_id', service_id)
                .select()

            return data || [];
        } catch (error) {
            throw new Error('Failed to update service state:', error.message);
        }
    }
}

export default new ServicesService();