import { styled } from 'styled-components'

export const Container = styled.a`
	transition: all ease 0.3s;
	width: max-content;

	position: relative;

	background: none;
	border: none;
	display: flex;
	align-items: center;
	gap: 0.8rem;

	text-decoration: none;
	color: white;

	&:hover {
		color: ${({ theme }) => theme.COLORS.CAKE_200};
		svg path {
			transition: all ease 0.3s;
			fill: ${({ theme }) => theme.COLORS.CAKE_200};
		}
	}
`
