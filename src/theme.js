import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em',
});

const theme = extendTheme({
	colors: {
		black: '#16161D',
		brand: {
			50: '#ecefff',
			100: '#cbceeb',
			200: '#a9aed6',
			300: '#888ec5',
			400: '#666db3',
			500: '#4d5499',
			600: '#3c4178',
			700: '#2a2f57',
			800: '#181c37',
			900: '#080819',
		},
	},
	fonts,
	breakpoints,
});

export default theme;
