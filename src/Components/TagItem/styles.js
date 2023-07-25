import { styled } from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;

	height: 3.2rem;
	width: min-content;

	background: ${({ isNew, theme }) =>
		isNew ? 'transparent' : theme.COLORS.LIGHT_600};
	padding: 0.8rem 1.6rem;

	border-radius: 8px;
	border: ${({ theme, isNew }) =>
		isNew ? `1px dashed ${theme.COLORS.LIGHT_400}` : `none`};

	input {
		min-width: 8rem;
		width: 100%;
		background: none;

		border: none;
		outline: none;
		color: white;
		display: block;
		cursor: ${({ isNew }) => (isNew ? 'arrow' : 'auto')};
	}

	svg {
		width: 0.8rem;
	}

	button {
		display: flex;
		align-items: center;
		border: none;
		background: none;
		margin: 0;
		padding: 0;
	}
`
