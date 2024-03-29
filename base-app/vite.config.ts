import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: 'localhost',
        port: 8089,
        open: true,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
