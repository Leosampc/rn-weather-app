import React from 'react';
import IconImage from '../IconImage';
import Text from '../Text';
import { styles, Header, StyledCard, Body } from './styled';

interface Props {
  title: string;
  icon?: string;
  description: string;
  subDescription?: string;
}

export default ({ title, icon, description, subDescription }: Props) => {
  return (
    <StyledCard
      testID="card-info"
      header={() => (
        <Header>
          {!!icon && <IconImage name={icon} size={20} />}
          <Text style={styles.title} size={10} weight={700} color="white">
            {title.toLocaleUpperCase()}
          </Text>
        </Header>
      )}>
      <Body>
        <Text size={30} weight={700} color="white">
          {description}
          {!!subDescription && (
            <Text size={18} weight={700} color="white">
              {subDescription}
            </Text>
          )}
        </Text>
      </Body>
    </StyledCard>
  );
};
