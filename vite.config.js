import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	plugins: [
		react(),
		FullReload(['./src/**/*.{js,jsx,tsx,css,json,svg,webp}']),
		ViteImageOptimizer({
			exclude: /^sprite.svg$/,
			png: { quality: 60 },
			jpeg: { quality: 60 },
			jpg: { quality: 60 },
			webp: { quality: 60 },
			svg: {
				multipass: true,
				plugins: [{ name: 'removeViewBox', active: false }],
			},
		}),
		visualizer({
			open: true,
			filename: 'dist/stats.html',
		}),
	],

	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules/react')) {
						return 'react';
					}
					if (id.includes('node_modules/redux')) {
						return 'redux';
					}
					if (id.includes('node_modules/clsx')) {
						return 'clsx';
					}
				},
			},
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
			output: {
				comments: false,
			},
		},
		cssCodeSplit: true,
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use 'src/assets/styles/variables' as *;
          @use 'src/assets/styles/mixins' as *;
        `,
				silenceDeprecations: ['legacy-js-api'],
			},
		},
	},
});
