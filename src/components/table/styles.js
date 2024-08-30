import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  ${({ theme }) => css`
    border-spacing: 0;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray};
    width: 100%;
    text-align: center;
  `}
`;

export const Head = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
  `}
`;

export const Tr = styled.tr`
  display: table-row;
`;

export const Th = styled.th`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.bold};
    padding: 0.5rem;
    text-align: center;
  `}
`;

export const Body = styled.tbody``;

export const Td = styled.td`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.medium};
    border: 1px solid ${theme.colors.gray};
    padding: 0.8rem;
    margin: 0;
  `}
  p {
    ${({ theme }) => css`
      font-family: ${theme.fonts.family.default};
      font-size: ${theme.fonts.sizes.small};
      font-weight: ${theme.fonts.weight.medium};
    `}
  }
`;

export const ButtonIcon = styled.button`
  border: 0px solid #000;
`
