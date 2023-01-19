import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    ${SectionContainer} {
      padding: ${theme.spacings.xsmall};
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }

    p{
      font-size: ${theme.font.sizes.small};
      font-weight: bold;
    }
  `}
`;
