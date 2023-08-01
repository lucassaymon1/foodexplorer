import { styled } from 'styled-components'

export const Container = styled.div`
	transition: border-color ease 0.2s;
	border: 1px solid transparent;

	background: ${({ theme }) => theme.COLORS.DARK_200};
	border-radius: 0.8rem;
	min-width: 21rem;
	height: 29.2rem;

	position: relative;

	text-align: center;
	padding: 2.4rem 2.4rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${({ admin }) => (admin ? 'center' : 'start')};
	gap: 1.2rem;
	z-index: 0;

	&:hover {
		border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
	}

	.icon {
		transition: all cubic-bezier(0.01, 0.91, 0.43, 1.18) 0.3s;
		width: 4rem;
		height: 4rem;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		z-index: 2000;

		outline: none;
		border: none;
		border-radius: 50%;
		background: none;

		svg {
			width: 2.4rem;
		}

		&:hover {
			background-color: rgba(220, 220, 220, 0.3);
		}
	}

	.quantify-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;

		button {
			height: 3.2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.quantify {
		h3 {
			font-weight: 400;
			font-size: 1.8rem;
		}
	}
	.details-button {
		background: none;
		border: none;
		position: relative;
		z-index: 1000;
		width: fit-content;
		height: fit-content;

		h2 {
			color: ${({ theme }) => theme.COLORS.CAKE_200};
			font-family: 'Roboto', sans-serif;
			font-weight: 400;
			font-size: 1.8rem;
		}

		h3 {
			margin: 0.8rem auto 1.2rem;
			font-weight: 400;
		}
		img {
			width: 8.8rem;
			height: 8.8rem;
			border-radius: 50%;
			object-fit: cover;
		}
		.description {
			display: none;
		}
	}

	@media screen and (min-width: 1024px) {
		min-width: 30.4rem;
		height: 46.2rem;
		padding: ${({ admin }) => (admin ? '0 2.6rem 0rem' : '2.4rem 2.6rem 0rem')};

		.icon {
			width: 5rem;
			height: 5rem;

			top: 0.8rem;
			right: 1.2rem;
			svg {
				width: 4rem;
			}
		}

		.details-button {
			img {
				width: 17.6rem;
				height: 17.6rem;
			}
			h3 {
				font-weight: 700;
				font-size: 2.4rem;
				line-height: 2.4rem;
				margin: 1rem 0 1.6rem;
			}
			h2 {
				font-size: 3.2rem;
				line-height: 5.1rem;
			}
			p {
				margin-bottom: 1.5rem;
			}
			.description {
				display: block;
			}
		}

		.quantify-container {
			flex-direction: row;
			padding-inline: 1.2rem;
			.quantify {
				h3 {
					font-size: 2rem;
					font-weight: 700;
				}
			}
			button {
				height: 4.8rem;
			}
		}
	}
`
