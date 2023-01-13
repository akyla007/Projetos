import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    sucess: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 6rem;
    height: 4rem;
    border: 0;
    border-radius: 0.5rem;
    margin: 0.5rem;

    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary};
 /* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }} */
`