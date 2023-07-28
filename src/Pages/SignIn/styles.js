import { styled } from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	gap: 3.2rem;

	margin: 7.3rem auto 15.8rem;
	max-width: 31.6rem;
	h2 {
		margin: auto;
	}
	input {
		width: 100%;
	}
	label {
		margin-bottom: 0.8rem;
	}

	a {
		margin: auto;
	}

	@media screen and (min-width: 1024px) {
		width: 47.6rem;
		max-width: none;
		padding: 6.4rem;
		background-color: ${({ theme }) => theme.COLORS.DARK_700};
		border-radius: 1.6rem;
		margin: 0;

		h2 {
			font-size: 3.2rem;
		}
	}
`

export const Container = styled.div`
	main {
		max-width: 31.6rem;
		margin: 15.8rem auto 0;
		text-align: left;
		.logo {
			h1 {
				font-size: 3.7rem;
			}
			display: flex;
			align-items: center;
			gap: 1rem;
			text-align: left;
			width: max-content;
		}
	}

	@media screen and (min-width: 1024px) {
		main {
			max-width: 100%;
			display: flex;
			align-items: center;
			align-self: center;

			gap: 30.6rem;
			margin: 0;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.logo {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 1rem;
				width: max-content;
			}
		}
	}
`
