import styled from 'styled-components';

import { IconButton } from '../IconButton';

export const ThemeButton = styled(IconButton)`

  > svg {
    cursor: pointer;
  }
  
  > svg path {
    fill: ${({ theme }) => theme.primary_text};
  }
  
  &.light {
    height: 2.8rem;
    width: 2.8rem;
  }

  &.dark {
    height: 2.5rem;
    width: 2.5rem;
  }

`;