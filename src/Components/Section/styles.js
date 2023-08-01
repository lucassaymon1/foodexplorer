import { styled } from 'styled-components'

export const Container = styled.div`
	> h2 {
		margin-bottom: 2.1rem;
	}
	.carousel {
		position: relative;

		> .content {
			display: flex;
			gap: 1.6rem;

			overflow-x: auto;
			margin-bottom: 2.4rem;
		}
		.carousel-button {
			display: none;
		}
	}

	@media screen and (min-width: 1024px) {
		.carousel {
			width: 100%;
			.content {
				transition: all ease 0.2s;
				scroll-behavior: smooth;
				::-webkit-scrollbar {
					display: none;
				}
				::-webkit-scrollbar-corner {
					display: none;
				}
			}
			.content::-webkit-scrollbar {
				display: none;
			}

			.carousel-button {
				transition: all ease 0.2s;

				border-radius: 2px;
				border: none;
				width: 27.8rem;

				height: 100%;
				display: flex;
				align-items: center;

				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				z-index: 3000;
				svg {
					margin-inline: 2rem;
					margin-bottom: 2rem;
					width: 4rem;
				}
				&:hover {
					filter: brightness(3.5);
				}
			}
			.caret-right {
				background: linear-gradient(
					90deg,
					rgba(0, 10, 15, 0.172541) 0%,
					#000a0f 100%
				);
				justify-content: end;
				right: 0;
			}
			.caret-left {
				background: linear-gradient(
					270deg,
					rgba(0, 10, 15, 0.05) 0%,
					#000a0f 100%
				);
				justify-content: start;
				left: 0;
			}

			/* .gradient {
				height: 100%;
				position: absolute;
				z-index: 2000;
				background: linear-gradient(
					90deg,
					rgba(0, 10, 15, 0.172541) 0%,
					#000a0f 100%
				);
			}
			.gradient-left {
				left: 0;
				width: 27.8rem;
				transform: matrix(-1, 0, 0, 1, 0, 0);
			}
			.gradient-right {
				position: absolute;
				right: 0;
				width: 22.4rem;
			} */
		}
	}
`
