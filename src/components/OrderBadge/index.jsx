import { Container, InnerContainer, BadgeText } from './styles';

import { useState } from 'react';

import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';

export function OrderBadge({ to }) {
  
  const [orderQuantity, setOrderQuantity] = useState(0);

  let dishes = [];

  return(
    <Container to={to}>
      <Receipt width={26} height={23} />
      <InnerContainer>
        <BadgeText>
          {dishes.length === 0 ? orderQuantity : orderQuantity + 1}
        </BadgeText>        
      </InnerContainer>
    </Container>
  );
}