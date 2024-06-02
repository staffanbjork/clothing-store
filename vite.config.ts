import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
	},
	resolve: {
		alias: {
			components: "/src/components",
			firebase: "/src/firebase",
			hooks: "/src/hooks",
			pages: "/src/pages",
			services: "/src/services",
			slices: "/src/store/slices",
			store: "/src/store",
			src: "/src/",
			types: "/src/types",
			utils: "/src/utils",
		}
	}
})
