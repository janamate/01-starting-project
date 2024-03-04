import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://222.236.61.86:7111/study/jjy/react_quiz_app/dist/",
})
