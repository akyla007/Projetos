import styled from 'styled-components'

export const HomerContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseStartCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountDownButton = styled(BaseStartCountDownButton)`
  background: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseStartCountDownButton)`
  background: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
