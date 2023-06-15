import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;

  > svg path {
    fill : ${({ theme }) => theme.primary_text};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -1rem;
  right: -1rem;

  background-color: ${({ theme }) => theme.buttons_background};

  height: 2rem;
  width: 2rem;

  border-radius: 9999px;
`;

export const BadgeText = styled.span`

  font-weight: 500;

  color: ${({ theme }) => theme.secondary_text};
`;
