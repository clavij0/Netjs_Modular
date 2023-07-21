import { registerAs } from "@nestjs/config"

export default registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATEBASE_PORT,
        },
        apikey: process.env.API_KEY,
    }
});