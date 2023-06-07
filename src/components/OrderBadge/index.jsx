import { Container, InnerContainer, BadgeText } from './styles';

import { useState } from 'react';

import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';
import { ReactComponent as Badge } from '../../assets/icons/Badge.svg';

export function OrderBadge() {
  
  const [orderQuantity, setOrderQuantity] = useState(0);

  let dishes = [];

  return(
    <Container>
      <Receipt size={32} />
      <InnerContainer>
        <BadgeText>
          {dishes.length === 0 ? orderQuantity : orderQuantity + 1}
        </BadgeText>        
      </InnerContainer>
    </Container>
  );
}