import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const ContainerCard = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.xsmall};
    font-weight: ${theme.fonts.weight.medium};
    border: 2px solid ${theme.colors.darkGray};
    border-radius: ${theme.border.radius.medium};
    margin: 0;
  `}
`;

export const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
`;

export const Text = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem;
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.small};
  `}
`;
