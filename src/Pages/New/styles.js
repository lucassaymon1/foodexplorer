import { styled } from 'styled-components'

export const Container = styled.div`
	.input-container {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex-wrap: wrap;

		width: 100%;
		height: 5rem;
		padding-inline: 0.8rem;
		background-color: ${({ theme }) => theme.COLORS.DARK_900};
		border-radius: 0.8rem;
		margin-top: 1.6rem;
	}

	main {
		margin: 1.1rem 3.5rem 0;
		padding-bottom: 7.4rem;

		.button-text {
			a {
				font-size: 1.8rem;
			}
			svg {
				width: 0.8rem;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		main {
			margin-inline: calc(2.3rem + 6.8625vw);
			margin-block: 4rem;
			.button-text {
				a {
					font-size: 2.4rem;
					font-weight: 700;
					color: ${({ theme }) => theme.COLORS.LIGHT_300};
				}
				svg {
					width: 1.8rem;
				}
			}
		}
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	gap: 2.4rem;

	margin: 2.4rem auto 5.3rem;
	width: 100%;
	max-width: 50rem;

	.form-area1,
	.form-area2 {
		display: flex;
		flex-direction: column;
		gap: 2.4rem;
	}

	.change-bgcolor,
	textarea {
		background-color: #0d161b;
	}

	.tags-container {
		height: max-content;
		padding: 10px;
	}

	h1 {
		font-size: 3.8rem;
		line-height: 3.8rem;
		margin-bottom: 2rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	label {
		margin-bottom: 1.6rem;
		display: block;
	}

	.select-wrapper {
		label {
			margin-bottom: 1.6rem;
			display: block;
		}
	}

	.input-image {
		display: flex;
		align-items: center;
		gap: 1rem;
		height: 5rem;

		margin: 1.6rem auto 0;
		padding: 0 1.6rem;
		border-radius: 8px;
		border: none;
		outline: none;

		overflow-x: hidden;

		color: white;
		cursor: pointer;

		> input[type='file'] {
			display: none;
		}
		span {
			font-family: 'Poppins', sans-serif;
			font-weight: 500;
		}
	}

	.select-container {
		display: flex;
		justify-content: center;
		flex-direction: column;

		border-radius: 8px;
		position: relative;
		border: none;
		outline: none;

		color: ${({ theme }) => theme.COLORS.LIGHT_400};
		cursor: pointer;

		.select-box {
			margin-top: 0;
			border: none;
			outline: none;
			appearance: none;
			background-color: ${({ theme }) => theme.COLORS.DARK_900};
			border-radius: 0.5rem;

			padding: 0 1.4rem;
			height: 5rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
			width: 100%;

			cursor: pointer;
		}
		.icon-container {
			height: 100%;
			position: absolute;
			right: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			> svg {
				transform: rotate(-90deg);
				width: 0.8rem;
			}
		}
	}
	.select-label {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		margin-bottom: -1rem;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.button-container {
		display: grid;
		grid-gap: 3.2rem;
		grid-template-columns: 1fr 1.3fr;

		button:nth-child(1) {
			background: #0d161b;
		}

		.delete-button {
			background: #0d161b;
			&:hover {
				background: #15242c;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: column;
		gap: 3.2rem;
		max-width: 100%;
		margin: 0;

		.input-image {
			padding: 0 3.2rem;
		}

		h1 {
			margin: 2.4rem 0 0.8rem;
		}

		.form-area1 {
			display: grid;
			grid-template-columns: 1fr 2fr 1.5fr;
			gap: 3.2rem;
			.select-container .select-box {
				background-color: #0d161b;
			}
		}
		.form-area2 {
			display: grid;
			grid-template-columns: 3fr 1fr;
			gap: 3.2rem;
		}

		.button-container {
			width: 30%;
			justify-self: flex-end;
			align-self: flex-end;
			flex-direction: row;
			text-align: right;
		}

		button {
			margin: 0;
		}
	}
`
