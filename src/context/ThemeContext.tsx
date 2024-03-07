import { useState, createContext, ReactNode, FC, Dispatch, SetStateAction, useEffect } from 'react';

type ThemeContextProps = {
	themeValue: 'default' | 'custom';
	setThemeValue: Dispatch<SetStateAction<'default' | 'custom'>>;
	toggleTheme: () => void;
};

type ThemeProviderProps = {
	children: ReactNode;
	initial: 'default' | 'custom';
};

export const ThemeContext = createContext<ThemeContextProps>({
	themeValue: 'default',
	setThemeValue: () => {},
	toggleTheme: () => {},
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initial = 'default' }) => {
	const [themeValue, setThemeValue] = useState(initial);

	const toggleTheme = () => {
		setThemeValue((prevThemeValue) => (prevThemeValue === 'default' ? 'custom' : 'default'));

		console.log('toggle theme', themeValue);
	};
	useEffect(() => {
		document.body.className = themeValue;
	}, [themeValue]);

	const value = { themeValue, setThemeValue, toggleTheme };

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
