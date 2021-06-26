import React from 'react';
import styled from 'styled-components';
import PracticeName from '../../components/PracticeName';

import { ArrowBack } from '@material-ui/icons';
import { IconButton, Typography } from '@material-ui/core';

import Teacher from '../../../assets/temp/teacher.jpg';
import { useRouter } from '../../hooks/useRouter';

const BackgroundDiv = styled.div`
  min-height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => props.theme.spacing(2)}px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 65.62%),
    url(${Teacher}) no-repeat center center/cover;
  background-color: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 65.62%);
`;

const ArrowWrapper = styled(IconButton)`
  width: 48px;
  height: 48px;
  background: ${props => props.theme.palette.primary.main};
  box-shadow: 0px 9px 12px rgb(0 0 0 / 14%), 0px 3px 16px rgb(0 0 0 / 12%),
    0px 5px 6px rgb(0 0 0 / 20%);
  border-radius: 24px;
  color: black;
`;

const Subtitle = styled(Typography)`
  margin-top: ${props => props.theme.spacing(1)}px;
`;
const Wrapper = styled.div``;

const PracticeDetails = () => {
  const router = useRouter();

  const handleClick = () => {
    router.history.goBack();
  };

  return (
    <BackgroundDiv>
      <ArrowWrapper onClick={handleClick}>
        <ArrowBack />
      </ArrowWrapper>
      <Wrapper>
        <PracticeName />
        <Subtitle variant="subtitle2" component="h2">
          Даосские практики с Константином Сухановым
        </Subtitle>
      </Wrapper>
    </BackgroundDiv>
  );
};

export default PracticeDetails;
