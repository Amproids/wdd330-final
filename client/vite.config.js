import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3002,
        proxy: {
            '/api': 'http://localhost:3001'
        }
    },
    
});