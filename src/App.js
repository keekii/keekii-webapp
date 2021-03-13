import logo from './logo.svg';
import './App.css';
import { loadTheme } from '@fluentui/react';
import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';

const myTheme = {
	palette: {
		themePrimary: '#0178D4',
		themeLighterAlt: '#f3f9fd',
		themeLighter: '#d0e7f8',
		themeLight: '#a9d3f2',
		themeTertiary: '#5ca9e5',
		themeSecondary: '#1a86d9',
		themeDarkAlt: '#006cbe',
		themeDark: '#005ba1',
		themeDarker: '#004377',
		neutralLighterAlt: '#faf9f8',
		neutralLighter: '#f3f2f1',
		neutralLight: '#edebe9',
		neutralQuaternaryAlt: '#e1dfdd',
		neutralQuaternary: '#d0d0d0',
		neutralTertiaryAlt: '#c8c6c4',
		neutralTertiary: '#c9c9c9',
		neutralSecondary: '#949494',
		neutralPrimaryAlt: '#626262',
		neutralPrimary: '#4d4d4d',
		neutralDark: '#3a3a3a',
		black: '#2b2b2b',
		white: '#ffffff',
	},
};

function App() {
	useEffect(() => {
		loadTheme(myTheme);
	}, []);

	return <LoginPage />;
}

export default App;
