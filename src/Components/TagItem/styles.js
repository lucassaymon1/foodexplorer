import { styled } from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;

	height: 3.2rem;
	width: ${({ isNew }) => (isNew ? 'min-content' : 'max-content')};

	background: ${({ isNew, theme }) =>
		isNew ? 'transparent' : theme.COLORS.LIGHT_600};
	padding: 0.8rem 0.8rem 0.8rem 1.2rem;

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
		margin: 0 4px 0;
	}

	button {
		display: flex;
		align-items: center;
		border: none;
		background: none;
		margin: 0;
		padding: 0;
	}
	p {
		margin-right: 4px;
	}
`
