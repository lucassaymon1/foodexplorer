import { styled } from 'styled-components'

export const Container = styled.button`
	transition: all ease 0.2s;

	width: 100%;
	border: none;
	background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
	border-radius: 0.4rem;
	padding: 1.2rem;
	color: white;
	font-weight: 500;
	&:hover {
		background-color: white;
		color: #e10408;

		svg {
			path {
				fill: #e10408;
			}
		}
	}
`
