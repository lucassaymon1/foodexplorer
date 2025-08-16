import { styled } from 'styled-components'

export const Container = styled.footer`
	width: 100%;
	height: 7.7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 0;
	margin-bottom: -5rem;

	padding-inline: 2.75rem;
	background-color: ${({ theme }) => theme.COLORS.DARK_600};

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.65rem;
	}

	h1 {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_700};
	}
	p {
		font-size: 1.2rem;
	}

	.desktop-icon {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		padding-inline: calc(2.3rem + 6.8625vw);
		.desktop-icon {
			display: block;
		}
		.mobile-icon {
			display: none;
		}

		h1 {
			font-size: 2.4rem;
		}
		p {
			font-size: 1.4rem;
		}
	}
`
