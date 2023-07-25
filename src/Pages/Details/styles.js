import { styled } from 'styled-components'

export const Container = styled.div`
	main {
		text-align: center;
		margin: 3.2rem 6rem 0;
		padding-bottom: 5rem;
		a {
			font-size: 2.4rem;
			text-align: left;
		}

		img {
			margin: 1.6rem auto;
			width: 26.3rem;
			height: 26.3rem;
			object-fit: cover;
			border-radius: 50%;
		}

		h1 {
			margin-top: 16px;
			font-family: 'Poppins', sans-serif;
			font-weight: 500;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
		}

		p {
			margin: 2.4rem auto 2.4rem;
			max-width: 28.6rem;
		}

		.tags-container {
			margin: 0 auto 4.8rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			gap: 2.4rem;

			max-width: 28.6rem;
		}

		.order-container {
			display: flex;
			justify-content: center;
			gap: 2rem;
			max-width: 31.6rem;
			margin: auto;
			> button {
				display: flex;
				gap: 0.8rem;
				align-items: center;
				justify-content: center;
				font-size: 1.1rem;
				line-height: 1.6rem;
				svg {
					width: 2.1rem;
				}
			}

			.quantify {
				button {
					width: 2.2rem;
				}
				font-size: 2.2rem;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		main {
			margin-inline: calc(2.3rem + 6.8625vw);
			padding-bottom: 7.4rem;
			.details-container {
				margin-top: 4.2rem;
				display: grid;
				gap: 4.7rem;
				grid-template-columns: 1fr 2fr;
				img {
					margin: 0;
					width: 39rem;
					height: 39rem;
				}
				.data-container {
					display: flex;
					flex-direction: column;
					text-align: left;
					justify-content: center;
					.tags-container {
						margin-inline: 0;
						text-align: left;
						justify-content: flex-start;
						max-width: 100%;
					}
					.order-container {
						margin: 0;
						justify-content: flex-start;
					}
					h1 {
						font-size: 4rem;
						line-height: 140%;
						font-weight: 500;
					}
					p {
						max-width: 100%;
						font-size: 2.4rem;
						line-height: 3.3rem;
						font-weight: 400;
						margin-inline: 0;
					}
				}
			}
		}
	}
`
