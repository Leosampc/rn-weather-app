import React from 'react';
import Text from '../Text';
import { Container, Description, Icon } from './styled';

interface Props {
  icon: string | boolean;
}
export default ({ icon }: Props) => {
  if (typeof icon === 'boolean') return null;

  return (
    <Container testID="empty-state">
      <Icon name={`${icon.toString()}Off`} size={26} />
      <Text weight="bold" size={22}>
        Clima Indisponível
      </Text>
      <Description size={14} color="secondary">
        Houve um problema ao tentar resgatar os dados do clima. Verifique sua
        conexão á internet ou localização e tente novamente.
      </Description>
    </Container>
  );
};
