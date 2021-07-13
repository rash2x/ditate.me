import React from 'react';
import styled from 'styled-components';

import { Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PracticeBadge from './PracticeBadge';
import getPriceValue from '../helpers/getPriceValue';

const Base = styled(Card)`
  margin-bottom: ${props => props.theme.spacing(2)}px;
  max-width: 480px;
  width: 100%;
  display: block;
  text-decoration: none;
  padding: ${props => props.theme.spacing(2, 2)};
  position: relative;
`;

const Title = styled(Typography).attrs({ variant: 'subtitle2' })`
  padding-right: 16px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const Price = styled(Typography).attrs({
  variant: 'subtitle2',
  component: 'div',
})`
  display: inline-flex;
  align-items: center;
  padding: 3px 6px 1px;
  border-radius: ${props => props.theme.shape.borderRadiusSmall}px;
  background: rgba(21, 22, 19, 1);
`;

const TopInfo = styled.header`
  display: flex;
  justify-content: space-between;
  margin: -4px -6px 0;
`;

const MainInfo = styled.main`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
`;

const BottomInfo = styled.footer`
  margin-top: ${props => props.theme.spacing(1)}px;
`;

const Location = styled(Typography).attrs({
  variant: 'body2',
})`
  margin-top: 4px;
`;

const PracticeDate = styled(Typography).attrs({
  variant: 'subtitle2',
})`
  color: ${props => props.theme.palette.primary.main};
`;

const PracticeCard = ({
  id,
  name,
  practiceName,
  practiceColor,
  price,
  dateTime,
  location,
  teacherImage,
  hideMainInfo,
}) => (
  <Base component={Link} to={`/practices/${id}`}>
    <TopInfo>
      <PracticeBadge name={practiceName} color={practiceColor || '#FFF59D'} />
      <Price>{getPriceValue(price)} </Price>
    </TopInfo>
    {!hideMainInfo && (
      <MainInfo>
        <Title component="h2">{name}</Title>
        <Avatar src={teacherImage} />
      </MainInfo>
    )}
    <BottomInfo>
      <PracticeDate component="span">{dateTime}</PracticeDate>
      <Location>{location}</Location>
    </BottomInfo>
  </Base>
);

export default PracticeCard;
