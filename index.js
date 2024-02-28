const axios = require('axios');

class AntiP2W {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

// Get all realms
    async getAllRealms() {
        try {
            const response = await axios.get(`https://antip2w.com/api/database/realms/all`, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching all realms:', error);
            throw error;
        }
    }
// Get a random realm	
    async getRandomRealm() {
        try {
            const response = await axios.get(`https://antip2w.com/api/database/realms/random`, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching random realm:', error);
            throw error;
        }
    }
// Get all realms that are marked as dangerous
    async getSuspiciousRealms() {
        try {
            const response = await axios.get(`https://antip2w.com/api/database/realms/suspicious`, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching Suspicious realms:', error);
            throw error;
        }
    }
// Delete a realm
    async deleteRealm(p2w_id) {
        try {
            const response = await axios.get(`https://antip2w.com/api/database/realms/dev/delete?p2w_id=${p2w_id}`, {
                headers: {
                    'Authorization': `${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching Realm:', error);
            throw error;
        }
    }
}

module.exports = AntiP2W;

