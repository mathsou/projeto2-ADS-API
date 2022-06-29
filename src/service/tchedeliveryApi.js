require("dotenv").config();
const { tchedelivery, googlemaps } = require('./baseAxios')


module.exports = {
    async getOrder(order_id) {
        const { data: {
            details:
            clientAddress,
            code
        } } = await tchedelivery.get('igetdeliveryorder', {
            params: {
                api_key: process.env.TCHE_API_KEY,
                json: 1,
                order_id
            }
        })
        if (code === 1) {
            const formatedAddress = `${clientAddress.street}, ${clientAddress.location_name} - ${clientAddress.area_name}, ${clientAddress.city} - RS`;
            const { data:{ 
                results: [{ 
                        geometry: { location } 
                    }]}} = await googlemaps.get('geocode/json', {
                params: {
                    key: process.env.MATRIX_KEY,
                    address: formatedAddress
                }
            })
            return {
                ...clientAddress,
                formatedAddress,
                location
            };
        }
        return false;
    }
}