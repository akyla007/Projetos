import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    filter: invert(40%) sepia(88%) saturate(829%) hue-rotate(125deg)
      brightness(102%) contrast(101%);
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['gray-100']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
