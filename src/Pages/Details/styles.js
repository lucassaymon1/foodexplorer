import { styled } from 'styled-components'

export const Container = styled.div`
	> a {
		margin: 3.2rem 6rem 0;
		font-size: 2.4rem;
		text-align: left;
	}
	main {
		text-align: center;
		margin: 0 6rem 0;
		padding-bottom: 5rem;
		height: 100%;
		display: grid;

		.img-container {
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				margin: 1.6rem auto 1.2rem;
				width: 26.3rem;
				height: 26.3rem;
				object-fit: cover;
				border-radius: 50%;
			}
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

		.details-container {
			margin-bottom: 11.5rem;
		}

		.tags-container {
			margin: 0 auto 4.8rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			gap: 2.4rem;

			max-width: 31.6rem;
		}

		.order-container {
			display: ${({ admin }) => (admin ? 'flex' : 'grid')};
			grid-template-columns: 1fr 3fr;
			align-items: center;
			justify-content: center;
			gap: 2rem;

			margin: auto;
			max-width: 31.6rem;
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
				gap: 0.8rem;
				button {
					width: 4rem;
				}
				font-size: 2.2rem;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		> a {
			font-weight: 500;
			margin-inline: calc(2.3rem + 6.8625vw);
		}
		main {
			align-items: center;
			justify-content: center;
			margin-inline: calc(2.3rem + 6.8625vw);
			padding-bottom: 5rem;
			padding: 0;

			.details-container {
				margin: 4.2rem 0 11.2rem;
				display: grid;
				gap: 4.7rem;
				grid-template-columns: 1.5fr 2fr;
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
						.quantify {
							gap: 1.6rem;
						}
						> button {
							width: max-content;
							padding-inline: 2.6rem;
						}
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
