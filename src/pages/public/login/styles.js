import styled, { css } from 'styled-components';

export const ContainerLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: ${theme.border.radius.medium};
    position: absolute;
    top: 30%;
    padding: 1.5rem;
    width: 35rem;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.bold};
    margin-bottom: 1rem;
    text-align: center;
  `}
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ImgAmbulance = styled.img`
  width: 75rem;
  height: 40rem;
  text-align: right;
`;
