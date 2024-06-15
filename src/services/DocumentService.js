import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

class DocumentService {
    async getUserDocs(user_id) {
        try {
            const { data, error } = await supabase
                .from('user_services')
                .select(`*, services(*)`)
                .eq('user_id', user_id)
            if (error) {
                throw error;
            }
            return data || [];
        } catch (error) {
            throw error;
        }
    }
}

export default new DocumentService();