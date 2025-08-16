import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'

// Criando o tema para o Chakra UI sem modificar o original

const theme = {
	COLORS: {
		LIGHT_300: '#E1E1E6', // TEXT COLOR
		LIGHT_400: '#7C7C8A', // INPUT TEXT
		LIGHT_500: '#C4C4CC', // DESCRIPTION TEXT
		LIGHT_600: '#76797B',
		LIGHT_700: '#4D585E', // FOOTER TEXT

		CAKE_200: '#82F3FF', // PRICING TEXT

		TOMATO_100: '#750310', // DEFAULT BUTTON
		TOMATO_200: '#92000E', // CLIQUED BUTTON
		TOMATO_400: '#AB4D55', // HOVER BUTTON

		DARK_200: '#00070A', // FOOD CARDS
		DARK_400: '#000A0F',
		DARK_600: '#00111A', // DARK BLUE CONTAINERS
		DARK_700: '#001119', // DARK BLUE CONTAINERS
		DARK_900: '#0D1D25', // INPUTS
		DARK_1000: '#192227', // TAGS
		DARK_1100: '#15242c' // Icon Button hover
	}
}

const config = defineConfig({
	theme: {
		tokens: {
			colors: {
				light: {
					300: theme.COLORS.LIGHT_300,
					400: theme.COLORS.LIGHT_400,
					500: theme.COLORS.LIGHT_500,
					600: theme.COLORS.LIGHT_600,
					700: theme.COLORS.LIGHT_700
				},
				cake: {
					200: { value: theme.COLORS.CAKE_200 }
				},
				tomato: {
					100: theme.COLORS.TOMATO_100,
					200: theme.COLORS.TOMATO_200,
					400: theme.COLORS.TOMATO_400
				},
				dark: {
					200: theme.COLORS.DARK_200,
					400: theme.COLORS.DARK_400,
					600: theme.COLORS.DARK_600,
					700: theme.COLORS.DARK_700,
					900: theme.COLORS.DARK_900,
					1000: theme.COLORS.DARK_1000,
					1100: theme.COLORS.DARK_1100
				}
			}
		}
	}
})

const system = createSystem(defaultConfig, config)

export { system, theme }
