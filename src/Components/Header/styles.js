import styled from 'styled-components'

export const Container = styled.header`
	display: grid;
	.header {
		display: grid;
		flex-direction: row;
		white-space: nowrap;
		grid-template-columns: 1fr 3fr 1fr;
		grid-row: 1;
		justify-content: space-between;
		align-items: center;
		grid-auto-flow: column;
		width: 100%;
		background-color: ${({ theme }) => theme.COLORS.DARK_600};
		padding: ${({ admin }) =>
			admin ? '5.5rem 0 2.8rem 2.4rem' : '5.5rem 2.4rem 2.8rem 2.4rem'};

		z-index: 2000;
		position: relative;

		.logo-container {
			width: 100%;
			display: flex;
			text-align: center;
			justify-content: center;
			position: relative;
			> h1 {
				opacity: 0;
				left: 0;
				position: absolute;
				font-size: 2.1rem;
				line-height: 2.9rem;
				font-family: 'Poppins', sans-serif;
				font-weight: 300;
				transition: all ease 0.3s;
			}
			> .menu-heading {
				opacity: 1;
				left: 1.6rem;
			}
		}
		.logo {
			.home-button {
				border: none;
				background: none;

				h1 {
					color: white;
				}
			}
			display: flex;
			gap: 0.8rem;
			align-items: center;
			justify-content: center;

			h1 {
				font-size: 2.1rem;
			}
			img {
				width: 2.4rem;
			}
			p {
				color: ${({ theme }) => theme.COLORS.CAKE_200};
				margin-top: 0.2rem;
				margin-left: 0.2rem;
				font-size: 1.2rem;
				line-height: 1.92rem;
			}
		}
		.logo-inactive {
			color: transparent;
			background: none;
			p,
			img,
			h1 {
				opacity: 0;
				transition: all ease 0.3s;
			}
		}
		> .hamburger {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 4.5px;
			height: 1.8rem;
			width: 2.4rem;
			padding: 10px;

			position: relative;

			border: none;
			background: none;

			> .bar,
			.bar-before,
			.bar-after {
				border: 1px solid white;
				width: 2.4rem;
				height: 0;
				border-radius: 0.5rem;
				transition: all ease 0.3s;
				position: absolute;
			}
			> .bar-before {
				top: 0;
			}
			> .bar {
				top: 48%;
			}
			> .bar-after {
				bottom: 0;
			}

			> .before-active {
				top: 1rem;
				transform: rotate(45deg);
			}
			> .bar-inactive {
				border-color: transparent;
			}
			> .after-active {
				top: 1rem;
				transform: rotate(-45deg);
			}
		}
		> .popup-icon {
			position: relative;

			.popup {
				display: flex;
				align-items: center;
				justify-content: center;

				position: absolute;
				top: -1rem;
				right: -1rem;

				background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
				height: 2rem;
				width: 2rem;
				font-size: 1.4rem;
				border-radius: 50%;
			}
			svg {
				display: block;
			}
		}

		.heading-container {
			display: flex;
			gap: 0.8rem;
			align-items: center;
			justify-content: center;
		}

		> .desktop-input,
		.desktop-button,
		.input-wrapper,
		.signOut {
			display: none;
		}
	}

	.menu-inactive {
		top: calc(-100% - 5rem);
	}
	.menu-active {
		top: 11rem;
	}
	.menu {
		background-color: ${({ theme }) => theme.COLORS.DARK_400};
		padding: 3.6rem 2.8rem;
		height: 100%;
		width: 100%;
		border-bottom: 1px solid #192227;

		position: absolute;
		z-index: 1000;

		transition: all ease 0.3s;
		.input-wrapper {
			padding-block: 1.2rem;
		}

		ul {
			list-style: none;
			margin-top: 3.6rem;
			li {
				button {
					background: none;
					border: none;
					width: 100%;
					border-bottom: 1px solid #192227;

					text-align: left;
					color: #e1e1e6;
					padding: 1rem;
					font-size: 2.4rem;
					line-height: 140%;
					font-weight: 300;
				}
			}
		}
	}

	@media screen and (min-width: 1024px) {
		.menu-inactive {
			display: none;
		}

		.popup-icon {
			display: none;
		}
		.menu {
			display: none;
		}

		.header {
			.signOut {
				display: inline-block;
			}
			display: grid;
			grid-template-columns: 0fr 2fr 0.5fr 0fr;
			gap: 3.2rem;
			padding-inline: 12.3rem;
			width: 100%;
			> .desktop-button {
				display: flex;
				align-items: center;
				gap: 0.8rem;
				width: max-content;
				padding-inline: 2.6rem;
			}
			.hamburger {
				display: none;
			}

			> .input-wrapper {
				display: block;
				input {
					height: 4.8rem;
					border-radius: 0.5rem;
				}
			}
			> .desktop-button {
				max-width: 21.6rem;
			}

			> .desktop-input,
			.input-wrapper {
				display: flex;
				min-width: 100%;
			}

			.logo-container {
				display: flex;
				align-items: flex-start;
				text-align: left;
				width: max-content;
				h1 {
					display: none;
				}
			}
			.logo {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				justify-self: flex-start;
				justify-content: flex-start;
				gap: 0;
				text-align: right;
				p {
					margin-top: -0.5rem;
					display: flex;
				}
				.heading-container {
					img {
						display: flex;
					}
					h1 {
						display: flex;
					}
					display: flex;
					align-items: center;
				}
			}
		}
	}
`
