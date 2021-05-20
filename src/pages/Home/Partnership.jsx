import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

const Base = styled.div`
  padding: ${props => props.theme.spacing(3, 3)};
`;

const Title = styled(Typography).attrs({
  variant: 'h2'
})`

`;

const Content = styled.div`
  
`;

const TelegramButton = styled(Button)`
  background: #368DCA;
  color: ${props => props.theme.palette.common.white};
  margin-top: ${props => props.theme.spacing(3)}px;
`;


const Partnership = () => {
  return (
    <Base>
      <Title>🤝  Партнёрство</Title>
      <Content>
        <p>Проводишь практики? Ищешь новые каналы выхода к людям? Присоединяйся в наше сообщество 😜</p>
        <p>Наш сервис помогает найти место, где можно заняться разными практиками медитации, познакомиться с людьми по духу и конечно же, познать свою глубину. </p>
      </Content>
      <TelegramButton color="primary" variant="contained">Связаться в телеграме</TelegramButton>
    </Base>
  );
};

export default Partnership;
