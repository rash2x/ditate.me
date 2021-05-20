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

const ScheduleButton= styled(Button)`
  margin-top: ${props => props.theme.spacing(3)}px;
`;


const About = () => {
  return (
    <Base>
      <Title>👁  О проекте</Title>
      <Content>
        <p><strong>Ditate.me</strong> - сообщество медитирующих людей. Мы учим и учимся медитировать</p>
        <p>Ты думаешь, что мы кучка сектантов сидящих под звуки мантр и воспевающие молитвы индусским богам? 🐘</p>
        <p>Конечно же да 😬 но кроме этого, мы погружены и в остальные сферы жизни!</p>
        <p>Оттачивание своих навыков на работе, провождение времени со своим близкими, увлечение искусством, музыкой, танцами, нацеленность на результат, влюбленность - это про нас 💪</p>
        <p><strong>И про тебя</strong>, раз ты тут. Кстати, привет 🖐😄</p>
        <p>Предлагаю погружаться уже сейчас. Отменяй билеты в Индию и переходи в расписание практик)</p>
      </Content>
      <ScheduleButton color="primary" variant="contained">🎯  Перейти расписание</ScheduleButton>
    </Base>
  );
};

export default About;
