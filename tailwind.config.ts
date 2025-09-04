import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}','./index.html'],
	

	theme: {
		extend: {
			fontFamily:{
				orbiter:['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
