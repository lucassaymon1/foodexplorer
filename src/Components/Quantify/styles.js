import { styled } from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;

	h3 {
		font-size: 2.4rem;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		line-height: 160%;
	}

	button {
		background: none;
		border: none;
		border-radius: 4px;

		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		width: 4rem;
		svg {
			width: 2rem;
			height: auto;
		}

		&:hover {
			background: #15242c;
		}
	}
`
